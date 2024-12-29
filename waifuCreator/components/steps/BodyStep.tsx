import React from 'react';
import { SelectionCard } from '../SelectionCard';
import { BodyType, BreastSize, ButtSize } from '../../types';

interface BodyStepProps {
  bodyType?: BodyType;
  breastSize?: BreastSize;
  buttSize?: ButtSize;
  onChangeBodyType: (value: BodyType) => void;
  onChangeBreastSize: (value: BreastSize) => void;
  onChangeButtSize: (value: ButtSize) => void;
}

export const BodyStep: React.FC<BodyStepProps> = ({
  bodyType,
  breastSize,
  buttSize,
  onChangeBodyType,
  onChangeBreastSize,
  onChangeButtSize,
}) => {
  const bodyTypes: BodyType[] = ['Petite', 'Slim', 'Athletic', 'Voluptuous', 'Curvy'];
  const breastSizes: BreastSize[] = ['Flat', 'Small', 'Medium', 'Large', 'Huge'];
  const buttSizes: ButtSize[] = ['Small', 'Medium', 'Large', 'Skinny', 'Athletic'];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-white text-center mb-6">Choose Body Type*</h2>
        <div className="grid grid-cols-5 gap-4">
          {bodyTypes.map((type) => (
            <SelectionCard
              key={type}
              label={type}
              selected={bodyType === type}
              onClick={() => onChangeBodyType(type)}
              className="aspect-square"
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white text-center mb-6">Choose Breast Size*</h2>
        <div className="grid grid-cols-5 gap-4">
          {breastSizes.map((size) => (
            <SelectionCard
              key={size}
              label={size}
              selected={breastSize === size}
              onClick={() => onChangeBreastSize(size)}
              className="aspect-square"
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white text-center mb-6">Choose Butt Size*</h2>
        <div className="grid grid-cols-5 gap-4">
          {buttSizes.map((size) => (
            <SelectionCard
              key={size}
              label={size}
              selected={buttSize === size}
              onClick={() => onChangeButtSize(size)}
              className="aspect-square"
            />
          ))}
        </div>
      </div>
    </div>
  );
};