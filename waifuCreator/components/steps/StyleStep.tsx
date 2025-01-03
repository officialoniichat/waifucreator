import React from 'react';
import { SelectionCard } from '../SelectionCard';
import { Style } from '../../types';
import { styleOptions } from './styleData';

interface StyleStepProps {
  value?: Style;
  onChange: (value: Style) => void;
}

export const StyleStep: React.FC<StyleStepProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-center">Choose Style</h2>
      <div className="grid grid-cols-2 gap-4">
        {styleOptions.map(({ type, img }) => (
          <SelectionCard
            key={type}
            label={type}
            imageSrc={img}
            selected={value === type}
            onClick={() => onChange(type)}
            className="aspect-square max-w-[300px] mx-auto w-full"
            data-field="style"
          />
        ))}
      </div>
    </div>
  );
};