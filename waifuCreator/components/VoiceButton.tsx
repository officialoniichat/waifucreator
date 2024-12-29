import React from 'react';
import { Volume2, Pause } from 'lucide-react';
import { Voice } from '../types';
import { voiceSamples } from '../constants/voiceSamples';

interface VoiceButtonProps {
  voice: Voice;
  selected: boolean;
  onClick: () => void;
  isPlaying: boolean;
  currentVoice: string | null;
  onTogglePlay: (voiceUrl: string, voiceId: string) => void;
}

export const VoiceButton: React.FC<VoiceButtonProps> = ({
  voice,
  selected,
  onClick,
  isPlaying,
  currentVoice,
  onTogglePlay,
}) => {
  const handleClick = () => {
    onTogglePlay(voiceSamples[voice], voice);
    onClick();
  };

  const isThisVoicePlaying = isPlaying && currentVoice === voice;

  return (
    <button
      onClick={handleClick}
      data-field="voice"
      className={`w-full h-10 sm:h-12 px-2 sm:px-3 rounded-full transition-all flex items-center gap-1.5 justify-center ${
        selected
          ? 'bg-[#4c5eeb] border-2 border-[#ff6b6b] ring-2 ring-[#ff6b6b]/50'
          : 'bg-[#c06bee] border-2 border-[#7b89ef] hover:bg-[#625bed]'
      }`}
    >
      {isThisVoicePlaying ? (
        <Pause size={14} className="text-white shrink-0" />
      ) : (
        <Volume2 size={14} className="text-white shrink-0" />
      )}
      <span className="text-white text-sm font-medium truncate">{voice}</span>
    </button>
  );
};