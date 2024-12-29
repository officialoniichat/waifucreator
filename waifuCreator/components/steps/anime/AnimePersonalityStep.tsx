import React from 'react';
import { Personality, Voice } from '../../../types';
import { personalityOptions } from './personalityData';
import { personalityColors } from './personalityColors';
import { useAudioPlayer } from '../../../hooks/useAudioPlayer';
import { VoiceButton } from '../../VoiceButton';

interface PersonalityCardProps {
  type: Personality;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  selected: boolean;
  onClick: () => void;
  iconColor: string;
}

const PersonalityCard: React.FC<PersonalityCardProps> = ({
  type,
  Icon,
  description,
  selected,
  onClick,
  iconColor,
}) => (
  <button
    onClick={onClick}
    data-field="personality"
    className={`w-full p-2 sm:p-3 rounded-lg transition-all ${
      selected
        ? 'bg-[#4c5eeb] border-2 border-[#ff6b6b] ring-2 ring-[#ff6b6b]/50'
        : 'bg-[#c06bee] border-2 border-[#7b89ef] hover:bg-[#625bed]'
    }`}
  >
    <div className="flex flex-col items-center h-[5.5rem] sm:h-28">
      <Icon size={20} className={`${iconColor} mb-1`} />
      <h3 className="text-white font-bold text-xs sm:text-sm mb-0.5">{type}</h3>
      <p className="text-white/80 text-[9px] leading-tight sm:text-xs text-center w-full px-1">
        {description}
      </p>
    </div>
  </button>
);

interface AnimePersonalityStepProps {
  personality?: Personality;
  voice?: Voice;
  onChangePersonality: (value: Personality) => void;
  onChangeVoice: (value: Voice) => void;
}

export const AnimePersonalityStep: React.FC<AnimePersonalityStepProps> = ({
  personality,
  voice,
  onChangePersonality,
  onChangeVoice,
}) => {
  const voices: Voice[] = [
    'Cute', 'Britain', 'American',
    'Asian', 'Sweet', 'Mature',
    'Smoky', 'Black', 'Malicious'
  ];

  const { isPlaying, currentVoice, togglePlay } = useAudioPlayer();

  return (
    <div className="space-y-8 sm:space-y-12">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">Choose Personality</h2>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {personalityOptions.map(({ type, Icon, description }) => (
            <PersonalityCard
              key={type}
              type={type}
              Icon={Icon}
              description={description}
              selected={personality === type}
              onClick={() => onChangePersonality(type)}
              iconColor={personalityColors[type]}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">Choose Voice</h2>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
          {voices.map((v) => (
            <VoiceButton
              key={v}
              voice={v}
              selected={voice === v}
              onClick={() => onChangeVoice(v)}
              isPlaying={isPlaying}
              currentVoice={currentVoice}
              onTogglePlay={togglePlay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};