import { useState, useEffect, useRef, useCallback } from 'react';
import type { VideoChatState } from '../types';
import { WebRTCService } from '../services/WebRTCService';

export const useVideoChat = (roomId: string) => {
  const [state, setState] = useState<VideoChatState>({
    localStream: null,
    remoteStream: null,
    isConnected: false,
    isConnecting: false,
    mediaState: { audio: true, video: true },
    roomId,
    error: null
  });

  const webRTCService = useRef<WebRTCService | null>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    initializeVideoChat();
    return () => {
      cleanup();
    };
  }, [roomId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Separate effect to assign local stream to video element
  useEffect(() => {
    if (state.localStream && localVideoRef.current) {        console.log('Assigning local stream to video element');
      localVideoRef.current.srcObject = state.localStream;
    }
  }, [state.localStream]);

  // Separate effect to assign remote stream to video element
  useEffect(() => {
    if (remoteVideoRef.current) {
      if (state.remoteStream) {
        console.log('Assigning remote stream to video element');
        remoteVideoRef.current.srcObject = state.remoteStream;
      } else {
        console.log('Removing remote stream from video element');
        remoteVideoRef.current.srcObject = null;
      }
    }
  }, [state.remoteStream]);

  const initializeVideoChat = async () => {
    try {
      setState(prev => ({ ...prev, isConnecting: true }));
      
      // Initialize WebRTC service
      webRTCService.current = new WebRTCService(roomId);
      
      // Configure callbacks
      webRTCService.current.onLocalStream = (stream: MediaStream) => {
        console.log('Callback onLocalStream chamado com stream:', stream);
        setState(prev => ({ ...prev, localStream: stream }));
      };

      webRTCService.current.onRemoteStream = (stream: MediaStream) => {
        console.log('Callback onRemoteStream chamado com stream:', stream);
        setState(prev => ({ ...prev, remoteStream: stream, isConnected: true }));
      };

      webRTCService.current.onDisconnected = () => {
        console.log('Callback onDisconnected chamado');
        setState(prev => ({ 
          ...prev, 
          remoteStream: null, 
          isConnected: false,
          isConnecting: false 
        }));
      };

      // Start connection
      await webRTCService.current.initialize();
      setState(prev => ({ ...prev, isConnecting: false }));
    } catch (error) {
      console.error('Error initializing video chat:', error);
      setState(prev => ({ ...prev, isConnecting: false, error: (error as Error).message }));

      // Do not re-throw, handle error in state
    }
  };

  const toggleAudio = useCallback(() => {
    if (webRTCService.current && webRTCService.current.localStream) {
      const newAudioState = webRTCService.current.toggleAudio();
      setState(prev => ({ 
        ...prev, 
        mediaState: { ...prev.mediaState, audio: newAudioState } 
      }));
      return newAudioState;
    }
    return false;
  }, []);

  const toggleVideo = useCallback(() => {
    if (webRTCService.current && webRTCService.current.localStream) {
      const newVideoState = webRTCService.current.toggleVideo();
      setState(prev => ({ 
        ...prev, 
        mediaState: { ...prev.mediaState, video: newVideoState } 
      }));
      return newVideoState;
    }
    return false;
  }, []);

  const endCall = useCallback(() => {
    if (webRTCService.current) {
      webRTCService.current.disconnect();
    }
    cleanup();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const cleanup = () => {        console.log('Executing cleanup...');
    
    // Clean video elements first
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = null;
    }
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = null;
    }

    // Then clean WebRTC service
    if (webRTCService.current) {
      webRTCService.current.cleanup();
    }
    
    // Finally update state
    setState({
      localStream: null,
      remoteStream: null,
      isConnected: false,
      isConnecting: false,
      mediaState: { audio: true, video: true },
      roomId,
      error: null
    });
  };

  const reinitializeStream = useCallback(async () => {
    if (webRTCService.current) {
      try {
        await webRTCService.current.reinitializeStream();
        setState(prev => ({ ...prev, isConnecting: false }));
      } catch (error) {
        setState(prev => ({ ...prev, isConnecting: false }));
        throw error;
      }
    }
  }, []);

  const retryConnection = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
    initializeVideoChat();
  }, []);

  return {
    ...state,
    localVideoRef,
    remoteVideoRef,
    toggleAudio,
    toggleVideo,
    endCall,
    reconnect: initializeVideoChat,
    reinitializeStream,
    retryConnection
  };
};
