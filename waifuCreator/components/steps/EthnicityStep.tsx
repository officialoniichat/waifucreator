import React from 'react';
import { SelectionCard } from '../SelectionCard';
import { Ethnicity } from '../../types';

interface EthnicityStepProps {
  value?: Ethnicity;
  onChange: (value: Ethnicity) => void;
}

export const EthnicityStep: React.FC<EthnicityStepProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white text-center">Choose Ethnicity*</h2>
      <div className="grid grid-cols-3 gap-4">
        {(['Caucasian', 'Latina', 'Asian', 'Arab', 'Black/Afro'] as Ethnicity[]).map((ethnicity) => (
          <SelectionCard
            key={ethnicity}
            label={ethnicity}
            selected={value === ethnicity}
            onClick={() => onChange(ethnicity)}
            className="aspect-square"
          />
        ))}
      </div>
    </div>
  );
};