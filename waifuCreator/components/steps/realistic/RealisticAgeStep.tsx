import React from 'react';
import { AgeOption } from '../AgeStep/AgeOption';
import { useAgeStep } from '../AgeStep/useAgeStep';
import type { Age } from '../../../types';

interface RealisticAgeStepProps {
  value?: Age;
  onChange: (value: Age) => void;
}

export const RealisticAgeStep: React.FC<RealisticAgeStepProps> = ({ value, onChange }) => {
  const { ageOptions, getAgeDisplay } = useAgeStep();

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Choose Age* (Realistic)</h2>
        {value && (
          <div className="text-6xl font-bold text-pink-500">
            {getAgeDisplay(value)}
          </div>
        )}
      </div>
      
      <div className="flex justify-center gap-6">
        {ageOptions.map((age) => (
          <AgeOption
            key={age}
            age={age}
            selected={value === age}
            onClick={() => onChange(age)}
          />
        ))}
      </div>
    </div>
  );
};