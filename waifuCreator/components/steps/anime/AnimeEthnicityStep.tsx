import React from 'react';
import { SelectionCard } from '../../SelectionCard';
import { Ethnicity } from '../../../types';
import { animeEthnicityOptions } from './ethnicityData';

interface AnimeEthnicityStepProps {
  value?: Ethnicity;
  onChange: (value: Ethnicity) => void;
}

export const AnimeEthnicityStep: React.FC<AnimeEthnicityStepProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-center">Choose Ethnicity</h2>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {animeEthnicityOptions.map(({ type, img }) => (
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