import { MdSync, MdCheckCircle, MdError, MdArrowBack } from 'react-icons/md';
import { VideoContainer } from '../VideoContainer';
import { Controls } from '../Controls';
import { ShareButton } from '../ShareButton';
import { useVideoChat } from '../../hooks/useVideoChat';
import styles from './VideoChat.module.css';
import ChatPanel from '../../components/chat/ChatPanel'; // ✅ new import

interface VideoChatProps {
  roomId: string;
  onBackToLanding: () => void;
}

export const VideoChat = ({ roomId, onBackToLanding }: VideoChatProps) => {
  const {
    localVideoRef,
    remoteVideoRef,
    isConnected,
    isConnecting,
    mediaState,
    error,
    toggleAudio,
    toggleVideo,
    endCall,
    retryConnection,
    socket,           // ✅ make sure useVideoChat returns this
    username          // ✅ your user’s display name
  } = useVideoChat(roomId);

  const handleEndCall = () => {
    endCall();
    onBackToLanding();
  };

  const handleRetry = () => {
    retryConnection();
  };

  const getConnectionStatus = () => {
    if (isConnecting)
      return {
        icon: <MdSync className={styles.spinIcon} size={16} />,
        text: 'Connecting...',
        class: styles.statusConnecting
      };
    if (isConnected)
      return {
        icon: <MdCheckCircle size={16} />,
        text: 'Connected',
        class: styles.statusConnected
      };
    return {
      icon: <MdError size={16} />,
      text: 'Waiting',
      class: styles.statusDisconnected
    };
  };

  if (!roomId) {
    return <div className={styles.videoChat}>Loading...</div>;
  }

  const status = getConnectionStatus();

  return (
    <div className={styles.videoChat}>
      <button className={styles.backButton} onClick={onBackToLanding} title="Back to home">
        <MdArrowBack size={20} />
      </button>

      <div className={styles.roomInfo}>
        Room: {roomId.substring(0, 8)}...
        <ShareButton roomId={roomId} />
      </div>

      <div className={`${styles.connectionStatus} ${status.class}`}>
        {status.icon}
        {status.text}
      </div>

      {error && (
        <div className={styles.errorMessage}>
          <h3>Media Error</h3>
          <p>{error}</p>
          <div className={styles.errorActions}>
            <button className={styles.retryButton} onClick={handleRetry}>
              Try Again
            </button>
          </div>
        </div>
      )}

      <VideoContainer
        localVideoRef={localVideoRef}
        remoteVideoRef={remoteVideoRef}
        isConnected={isConnected}
        isConnecting={isConnecting}
        mediaState={mediaState}
      />

      <Controls
        mediaState={mediaState}
        onToggleAudio={toggleAudio}
        onToggleVideo={toggleVideo}
        onEndCall={handleEndCall}
      />

      {/* ✅ Chat panel added here */}
      <ChatPanel socket={socket} roomId={roomId} username={username || 'Guest'} />
    </div>
  );
};
