import { createContext, useContext, useState, useEffect, useRef } from 'react';
import audioTrack from '../Music/meperguntaram.mp3';

const MusicContext = createContext({
  isPlaying: false,
  togglePlay: () => {},
});

export function MusicProvider({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Retrieve previous position and pause state from localStorage
    const savedTime = parseFloat(localStorage.getItem('music_current_time') || '20');
    const isExplicitlyPaused = localStorage.getItem('music_is_paused') === 'true';

    // Start from saved position or default to 20s
    const startTime = (!isNaN(savedTime) && savedTime >= 20) ? savedTime : 20;

    const setInitialTime = () => {
      try {
        audio.currentTime = startTime;
      } catch {
        // Audio metadata may still be loading
      }
    };

    setInitialTime();
    audio.addEventListener('loadedmetadata', setInitialTime);

    // Save timestamp throttled to avoid main thread I/O overhead
    let lastSaved = 0;
    const handleTimeUpdate = () => {
      const now = performance.now();
      if (now - lastSaved >= 1000 && audio.currentTime && !isNaN(audio.currentTime)) {
        lastSaved = now;
        localStorage.setItem('music_current_time', audio.currentTime.toString());
      }
    };
    audio.addEventListener('timeupdate', handleTimeUpdate);

    // Attempt playback function
    const attemptPlay = () => {
      const userPaused = localStorage.getItem('music_is_paused') === 'true';
      if (userPaused) {
        setIsPlaying(false);
        return;
      }

      if (audio.currentTime < 20) {
        audio.currentTime = 20;
      }

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay blocked by browser policy without user gesture
            setIsPlaying(false);
          });
      }
    };

    // Autoplay will trigger on first user gesture below to prevent blocking page load

    // Fallback: auto-resume on first user gesture (touch, scroll, click, keydown)
    const handleFirstInteraction = () => {
      const userPaused = localStorage.getItem('music_is_paused') === 'true';
      if (!userPaused && audio.paused) {
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

    // Sync state with audio events
    const onPlay = () => {
      setIsPlaying(true);
      localStorage.setItem('music_is_paused', 'false');
    };
    const onPause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    // Save timestamp right before page unload / refresh
    const handleBeforeUnload = () => {
      if (audio.currentTime && !isNaN(audio.currentTime)) {
        localStorage.setItem('music_current_time', audio.currentTime.toString());
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      cleanupListeners();
      audio.removeEventListener('loadedmetadata', setInitialTime);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      localStorage.setItem('music_is_paused', 'true');
    } else {
      localStorage.setItem('music_is_paused', 'false');
      if (audio.currentTime < 20) {
        audio.currentTime = 20;
      }
      audio.play().catch((err) => {
        console.error('Erro ao reproduzir áudio:', err);
      });
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, togglePlay }}>
      <audio
        ref={audioRef}
        src={audioTrack}
        preload="none"
        loop
      />
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}
