import { useMusic } from '../context/MusicContext';

export default function HeaderMusicButton({ className = '' }) {
  const { isPlaying, togglePlay } = useMusic();

  return (
    <button
      type="button"
      className={`header-music-btn ${isPlaying ? 'is-playing' : 'is-paused'} ${className}`}
      onClick={togglePlay}
      aria-label={isPlaying ? 'Pausar música de fundo' : 'Tocar música de fundo'}
      title={isPlaying ? 'Pausar música' : 'Tocar música'}
    >
      {/* Animated Equalizer Waveform */}
      <div className="header-music-bars" aria-hidden="true">
        <span className="hm-bar bar-1"></span>
        <span className="hm-bar bar-2"></span>
        <span className="hm-bar bar-3"></span>
        <span className="hm-bar bar-4"></span>
      </div>

      <span className="header-music-text">
        {isPlaying ? 'Pausar' : 'Música'}
      </span>

      {/* Action Indicator Icon */}
      <div className="header-music-icon" aria-hidden="true">
        {isPlaying ? (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1.5"></rect>
            <rect x="14" y="4" width="4" height="16" rx="1.5"></rect>
          </svg>
        ) : (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="6 4 20 12 6 20 6 4"></polygon>
          </svg>
        )}
      </div>
    </button>
  );
}
