import { 
  MdMic, 
  MdMicOff, 
  MdVideocam, 
  MdVideocamOff, 
  MdCallEnd 
} from 'react-icons/md';
import type { MediaState } from '../../types';
import styles from './Controls.module.css';

interface ControlsProps {
  mediaState: MediaState;
  onToggleAudio: () => void;
  onToggleVideo: () => void;
  onEndCall: () => void;
}

export const Controls = ({ mediaState, onToggleAudio, onToggleVideo, onEndCall }: ControlsProps) => {
  return (
    <div className={styles.controls}>
      <button 
        className={`${styles.controlButton} ${styles.audioButton} ${!mediaState.audio ? styles.muted : ''}`}
        onClick={onToggleAudio}
        title={mediaState.audio ? 'Mutar microfone' : 'Ativar microfone'}
      >
        {mediaState.audio ? <MdMic size={20} /> : <MdMicOff size={20} />}
      </button>
      
      <button 
        className={`${styles.controlButton} ${styles.videoButton} ${!mediaState.video ? styles.disabled : ''}`}
        onClick={onToggleVideo}
        title={mediaState.video ? 'Desligar câmera' : 'Ligar câmera'}
      >
        {mediaState.video ? <MdVideocam size={20} /> : <MdVideocamOff size={20} />}
      </button>
      
      <button 
        className={`${styles.controlButton} ${styles.endCallButton}`}
        onClick={onEndCall}
        title="Encerrar chamada"
      >
        <MdCallEnd size={20} />
      </button>
    </div>
  );
};
