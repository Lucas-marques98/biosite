import { useState, useEffect, useRef } from 'react';
import audioTrack from '../Music/meperguntaram.mp3';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set start time to 20 seconds
    const initAudio = () => {
      try {
        if (audio.currentTime < 20) {
          audio.currentTime = 20;
        }
      } catch {
        // ignore if not ready
      }
    };

    initAudio();

    const attemptPlay = () => {
      initAudio();
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay without user interaction was blocked by browser policy
            setIsPlaying(false);
          });
      }
    };

    // Attempt direct autoplay
    attemptPlay();

    // Fallback: on first interaction on PC or mobile, auto-start if not already playing
    const handleFirstInteraction = () => {
      if (audio.paused) {
        attemptPlay();
      }
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true, passive: true });
    window.addEventListener('pointerdown', handleFirstInteraction, { once: true, passive: true });
    window.addEventListener('scroll', handleFirstInteraction, { once: true, passive: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true, passive: true });

    // Handle audio events
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      cleanupListeners();
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      if (audio.currentTime < 20) {
        audio.currentTime = 20;
      }
      audio.play().catch((err) => {
        console.error('Erro ao reproduzir áudio:', err);
      });
    }
  };

  return (
    <aside className="music-player-floating" aria-label="Controle de Áudio">
      <audio
        ref={audioRef}
        src={audioTrack}
        preload="auto"
        loop
      />
      <button
        type="button"
        className={`music-player-btn ${isPlaying ? 'is-playing' : 'is-paused'}`}
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}
        title={isPlaying ? 'Pausar música' : 'Tocar música'}
      >
        {/* Animated Equalizer Waveform */}
        <div className="music-player-bars" aria-hidden="true">
          <span className="music-bar bar-1"></span>
          <span className="music-bar bar-2"></span>
          <span className="music-bar bar-3"></span>
          <span className="music-bar bar-4"></span>
        </div>

        {/* Text Status */}
        <span className="music-player-label">
          {isPlaying ? 'Pausar' : 'Tocar'}
        </span>

        {/* Action Icon */}
        <div className="music-player-icon" aria-hidden="true">
          {isPlaying ? (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1.5"></rect>
              <rect x="14" y="4" width="4" height="16" rx="1.5"></rect>
            </svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6 4 20 12 6 20 6 4"></polygon>
            </svg>
          )}
        </div>
      </button>
    </aside>
  );
}
