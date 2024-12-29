import React from 'react';
import { Clothing } from '../../../types';
import { clothingOptions } from './clothingData';

interface ClothingButtonProps {
  clothing: Clothing;
  selected: boolean;
  onClick: () => void;
}

const ClothingButton: React.FC<ClothingButtonProps> = ({
  clothing,
  selected,
  onClick,
}) => (
  <button
    onClick={onClick}
    data-field="clothing"
    className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-full transition-all whitespace-nowrap text-sm ${
      selected
        ? 'bg-[#4c5eeb] border-2 border-[#ff6b6b] ring-2 ring-[#ff6b6b]/50'
        : 'bg-[#c06bee] border-2 border-[#7b89ef] hover:bg-[#625bed]'
    }`}
  >
    <span className="text-white">{clothing}</span>
  </button>
);

interface AnimeClothingStepProps {
  value?: Clothing;
  onChange: (value: Clothing) => void;
}

export const AnimeClothingStep: React.FC<AnimeClothingStepProps> = ({
  value,
  onChange
}) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-center">Choose Clothing</h2>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
        {clothingOptions.map((clothing) => (
          <ClothingButton
            key={clothing}
            clothing={clothing}
            selected={value === clothing}
            onClick={() => onChange(clothing)}
          />
        ))}
      </div>
    </div>
  );
};