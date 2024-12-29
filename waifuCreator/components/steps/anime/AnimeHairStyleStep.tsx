import React from 'react';
import { SelectionCard } from '../../SelectionCard';
import { HairStyle } from '../../../types';
import { animeHairStyleOptions } from './hairStyleData';

interface AnimeHairStyleStepProps {
  value?: HairStyle;
  onChange: (value: HairStyle) => void;
}

export const AnimeHairStyleStep: React.FC<AnimeHairStyleStepProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white text-center">Choose Hair Style* (Anime)</h2>
      <div className="grid grid-cols-3 gap-4">
        {animeHairStyleOptions.map(({ type, img }) => (
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