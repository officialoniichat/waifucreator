import React from 'react';
import { SelectionCard } from '../../SelectionCard';
import { ColorButton } from '../../ColorButton';
import { EyeColor, HairStyle, HairColor } from '../../../types';
import { animeEyeColorOptions } from './eyeColorData';
import { animeHairStyleOptions } from './hairStyleData';
import { animeHairColorOptions } from './hairColorData';

interface AnimeAppearanceStepProps {
  eyeColor?: EyeColor;
  hairStyle?: HairStyle;
  hairColor?: HairColor;
  onChangeEyeColor: (value: EyeColor) => void;
  onChangeHairStyle: (value: HairStyle) => void;
  onChangeHairColor: (value: HairColor) => void;
}

export const AnimeAppearanceStep: React.FC<AnimeAppearanceStepProps> = ({
  eyeColor,
  hairStyle,
  hairColor,
  onChangeEyeColor,
  onChangeHairStyle,
  onChangeHairColor,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-white text-center mb-3">Choose Eye Color</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4">
          {animeEyeColorOptions.map(({ type, img }) => (
            <SelectionCard
              key={type}
              label={type}
              imageSrc={img}
              selected={eyeColor === type}
              onClick={() => onChangeEyeColor(type)}
              className="aspect-[2/1.5] sm:aspect-[2/1.2] max-w-[200px] mx-auto w-full rounded-lg overflow-hidden"
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg sm:text-xl font-bold text-white text-center mb-3">Choose Hair Style</h2>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {animeHairStyleOptions.map(({ type, img }) => (
            <SelectionCard
              key={type}
              label={type}
              imageSrc={img}
              selected={hairStyle === type}
              onClick={() => onChangeHairStyle(type)}
              className="aspect-square max-w-[300px] mx-auto w-full"
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg sm:text-xl font-bold text-white text-center mb-3">Choose Hair Color</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
          {animeHairColorOptions.map(({ type, backgroundColor, borderColor, textColor, gradient }) => (
            <ColorButton
              key={type}
              color={type}
              label={type}
              selected={hairColor === type}
              onClick={() => onChangeHairColor(type)}
              backgroundColor={backgroundColor}
              borderColor={borderColor}
              textColor={textColor}
              gradient={gradient}
            />
          ))}
        </div>
      </div>
    </div>
  );
};