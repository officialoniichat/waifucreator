import { useState, useEffect, useCallback, useRef } from 'react';

export const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVoice, setCurrentVoice] = useState<string | null>(null);

  const cleanup = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeAttribute('src');
      audioRef.current = null;
      setIsPlaying(false);
      setCurrentVoice(null);
    }
  }, []);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  const preloadAudio = async (url: string): Promise<HTMLAudioElement> => {
    return new Promise((resolve, reject) => {
      const audio = new Audio();
      
      const handleCanPlay = () => {
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
        resolve(audio);
      };

      const handleError = (e: ErrorEvent) => {
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
        reject(new Error(`Failed to load audio: ${e.message}`));
      };

      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('error', handleError);
      
      audio.preload = 'auto';
      audio.src = url;
      audio.load();
    });
  };

  const togglePlay = useCallback(async (voiceUrl: string, voiceId: string) => {
    try {
      if (isPlaying && currentVoice === voiceId) {
        cleanup();
        return;
      }

      // Clean up previous audio if exists
      cleanup();

      // Preload and set up new audio
      const audio = await preloadAudio(voiceUrl);
      audioRef.current = audio;

      // Set up event listeners
      const handleEnded = () => {
        setIsPlaying(false);
        setCurrentVoice(null);
        cleanup();
      };

      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('pause', () => setIsPlaying(false));
      audio.addEventListener('play', () => setIsPlaying(true));

      // Start playback
      await audio.play();
      setIsPlaying(true);
      setCurrentVoice(voiceId);

      // Cleanup event listeners when audio finishes
      audio.addEventListener('ended', () => {
        audio.removeEventListener('ended', handleEnded);
      });
    } catch (error) {
      console.error('Audio playback failed:', error);
      cleanup();
    }
  }, [isPlaying, currentVoice, cleanup]);

  return {
    isPlaying,
    currentVoice,
    togglePlay
  };
};