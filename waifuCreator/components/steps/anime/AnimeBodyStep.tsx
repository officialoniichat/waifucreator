import React from 'react';
import { SelectionCard } from '../../SelectionCard';
import { BodyType, BreastSize, ButtSize } from '../../../types';
import { animeBodyTypeOptions, animeBreastSizeOptions, animeButtSizeOptions } from './bodyData';

interface AnimeBodyStepProps {
  bodyType?: BodyType;
  breastSize?: BreastSize;
  buttSize?: ButtSize;
  onChangeBodyType: (value: BodyType) => void;
  onChangeBreastSize: (value: BreastSize) => void;
  onChangeButtSize: (value: ButtSize) => void;
}

export const AnimeBodyStep: React.FC<AnimeBodyStepProps> = ({
  bodyType,
  breastSize,
  buttSize,
  onChangeBodyType,
  onChangeBreastSize,
  onChangeButtSize,
}) => {
  return (
    <div className="space-y-8 sm:space-y-12">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">Choose Body Type</h2>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {animeBodyTypeOptions.map(({ type, img }) => (
            <SelectionCard
              key={type}
              label={type}
              imageSrc={img}
              selected={bodyType === type}
              onClick={() => onChangeBodyType(type)}
              className="aspect-square max-w-[300px] mx-auto w-full"
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">Choose Breast Size</h2>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {animeBreastSizeOptions.map(({ type, img }) => (
            <SelectionCard
              key={type}
              label={type}
              imageSrc={img}
              selected={breastSize === type}
              onClick={() => onChangeBreastSize(type)}
              className="aspect-square max-w-[300px] mx-auto w-full"
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">Choose Butt Size</h2>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {animeButtSizeOptions.map(({ type, img }) => (
            <SelectionCard
              key={type}
              label={type}
              imageSrc={img}
              selected={buttSize === type}
              onClick={() => onChangeButtSize(type)}
              className="aspect-square max-w-[300px] mx-auto w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};