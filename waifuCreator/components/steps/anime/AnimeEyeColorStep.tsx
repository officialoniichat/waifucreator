import React from 'react';
import { SelectionCard } from '../../SelectionCard';
import { EyeColor } from '../../../types';
import { animeEyeColorOptions } from './eyeColorData';

interface AnimeEyeColorStepProps {
  value?: EyeColor;
  onChange: (value: EyeColor) => void;
}

export const AnimeEyeColorStep: React.FC<AnimeEyeColorStepProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-center">Choose Eye Color* (Anime)</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
        {animeEyeColorOptions.map(({ type, img }) => (
          <SelectionCard
            key={type}
            label={type}
            imageSrc={img}
            selected={value === type}
            onClick={() => onChange(type)}
            className="aspect-square max-w-[200px] mx-auto w-full rounded-full overflow-hidden"
          />
        ))}
      </div>
    </div>
  );
};