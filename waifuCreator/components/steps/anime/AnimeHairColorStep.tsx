import React from 'react';
import { SelectionCard } from '../../SelectionCard';
import { HairColor } from '../../../types';
import { animeHairColorOptions } from './hairColorData';

interface AnimeHairColorStepProps {
  value?: HairColor;
  onChange: (value: HairColor) => void;
}

export const AnimeHairColorStep: React.FC<AnimeHairColorStepProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white text-center">Choose Hair Color* (Anime)</h2>
      <div className="grid grid-cols-3 gap-4">
        {animeHairColorOptions.map(({ type, img }) => (
          <SelectionCard
            key={type}
            label={type}
            imageSrc={img}
            selected={value === type}
            onClick={() => onChange(type)}
            className="aspect-square"
          />
        ))}
      </div>
    </div>
  );
};