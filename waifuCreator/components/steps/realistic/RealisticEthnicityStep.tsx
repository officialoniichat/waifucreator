import React from 'react';
import { SelectionCard } from '../../SelectionCard';
import { Ethnicity } from '../../../types';

interface RealisticEthnicityStepProps {
  value?: Ethnicity;
  onChange: (value: Ethnicity) => void;
}

export const RealisticEthnicityStep: React.FC<RealisticEthnicityStepProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white text-center">Choose Ethnicity* (Realistic)</h2>
      <div className="grid grid-cols-3 gap-4">
        {([
          { type: 'Caucasian', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400' },
          { type: 'Latina', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400' },
          { type: 'Asian', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400' },
          { type: 'Arab', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400' },
          { type: 'Black/Afro', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400' }
        ] as const).map(({ type, img }) => (
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