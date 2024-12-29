import React from 'react';
import { SelectionCard } from '../SelectionCard';
import { EyeColor, HairStyle, HairColor } from '../../types';

interface AppearanceStepProps {
  eyeColor?: EyeColor;
  hairStyle?: HairStyle;
  hairColor?: HairColor;
  onChangeEyeColor: (value: EyeColor) => void;
  onChangeHairStyle: (value: HairStyle) => void;
  onChangeHairColor: (value: HairColor) => void;
}

export const AppearanceStep: React.FC<AppearanceStepProps> = ({
  eyeColor,
  hairStyle,
  hairColor,
  onChangeEyeColor,
  onChangeHairStyle,
  onChangeHairColor,
}) => {
  const eyeColors: EyeColor[] = ['Brown', 'Blue', 'Green', 'Yellow', 'Red'];
  const hairStyles: HairStyle[] = ['Straight', 'Braids', 'Bangs', 'Curly', 'Bun', 'Short', 'Long', 'Ponytail', 'Pigtails'];
  const hairColors: HairColor[] = ['Blonde', 'Brunette', 'Black', 'Redhead', 'Pink', 'White', 'Blue', 'Green', 'Purple', 'Multicolor'];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-white text-center mb-6">Choose Eye Color*</h2>
        <div className="grid grid-cols-5 gap-4">
          {eyeColors.map((color) => (
            <SelectionCard
              key={color}
              label={color}
              selected={eyeColor === color}
              onClick={() => onChangeEyeColor(color)}
              className="aspect-[2/1]"
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white text-center mb-6">Choose Hair Style*</h2>
        <div className="grid grid-cols-3 gap-4">
          {hairStyles.map((style) => (
            <SelectionCard
              key={style}
              label={style}
              selected={hairStyle === style}
              onClick={() => onChangeHairStyle(style)}
              className="aspect-square"
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white text-center mb-6">Choose Hair Color*</h2>
        <div className="grid grid-cols-5 gap-4">
          {hairColors.map((color) => (
            <SelectionCard
              key={color}
              label={color}
              selected={hairColor === color}
              onClick={() => onChangeHairColor(color)}
              className="aspect-[2/1]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};