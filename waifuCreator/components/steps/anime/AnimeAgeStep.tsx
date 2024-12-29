import React from 'react';
import { SelectionCard } from '../../SelectionCard';
import { Age } from '../../../types';
import { animeAgeOptions } from './ageData';

interface AnimeAgeStepProps {
  value?: Age;
  onChange: (value: Age) => void;
}

export const AnimeAgeStep: React.FC<AnimeAgeStepProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-center">Choose Age</h2>
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {animeAgeOptions.map(({ type, img }) => (
          <SelectionCard
            key={type}
            label={type}
            imageSrc={img}
            selected={value === type}
            onClick={() => onChange(type)}
            className="aspect-square max-w-[300px] mx-auto w-full"
          />
        ))}
      </div>
    </div>
  );
};