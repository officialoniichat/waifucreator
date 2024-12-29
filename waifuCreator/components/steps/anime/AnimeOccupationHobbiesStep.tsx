import React from 'react';
import { Occupation, Hobby } from '../../../types';
import { occupations, availableHobbies } from './occupationData';

interface OccupationButtonProps {
  occupation: Occupation;
  selected: boolean;
  onClick: () => void;
}

const OccupationButton: React.FC<OccupationButtonProps> = ({
  occupation,
  selected,
  onClick,
}) => (
  <button
    onClick={onClick}
    data-field="occupation"
    className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-full transition-all whitespace-nowrap text-sm ${
      selected
        ? 'bg-[#4c5eeb] border-2 border-[#ff6b6b] ring-2 ring-[#ff6b6b]/50'
        : 'bg-[#c06bee] border-2 border-[#7b89ef] hover:bg-[#625bed]'
    }`}
  >
    <span className="text-white">{occupation}</span>
  </button>
);

interface HobbyButtonProps {
  hobby: Hobby;
  selected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const HobbyButton: React.FC<HobbyButtonProps> = ({
  hobby,
  selected,
  onClick,
  disabled,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    data-field="hobbies"
    className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-full transition-all whitespace-nowrap text-sm ${
      selected
        ? 'bg-[#4c5eeb] border-2 border-[#ff6b6b] ring-2 ring-[#ff6b6b]/50'
        : disabled
        ? 'bg-[#6b7bee]/50 border-2 border-[#7b89ef]/50 cursor-not-allowed'
        : 'bg-[#c06bee] border-2 border-[#7b89ef] hover:bg-[#625bed]'
    }`}
  >
    <span className="text-white">{hobby}</span>
  </button>
);

interface AnimeOccupationHobbiesStepProps {
  occupation?: Occupation;
  hobbies: Hobby[];
  onChangeOccupation: (value: Occupation) => void;
  onChangeHobbies: (value: Hobby[]) => void;
}

const MAX_HOBBIES = 3;

export const AnimeOccupationHobbiesStep: React.FC<AnimeOccupationHobbiesStepProps> = ({
  occupation,
  hobbies,
  onChangeOccupation,
  onChangeHobbies,
}) => {
  const toggleHobby = (hobby: Hobby) => {
    if (hobbies.includes(hobby)) {
      onChangeHobbies(hobbies.filter(h => h !== hobby));
    } else if (hobbies.length < MAX_HOBBIES) {
      onChangeHobbies([...hobbies, hobby]);
    }
  };

  return (
    <div className="space-y-8 sm:space-y-12">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-2">Choose Occupation</h2>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
          {occupations.map((o) => (
            <OccupationButton
              key={o}
              occupation={o}
              selected={occupation === o}
              onClick={() => onChangeOccupation(o)}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-2">Choose Hobbies</h2>
        <p className="text-white/80 text-center mb-4 text-sm">You can choose up to 3 variants</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
          {availableHobbies.map((h) => (
            <HobbyButton
              key={h}
              hobby={h}
              selected={hobbies.includes(h)}
              onClick={() => toggleHobby(h)}
              disabled={hobbies.length >= MAX_HOBBIES && !hobbies.includes(h)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};