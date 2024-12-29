import React from 'react';
import { WaifuCharacter } from '../../types';
import { AttributeCard } from './AttributeCard';
import { getAttributeData } from './utils';
import { Brain, Volume2, Briefcase, Gamepad, Shirt } from 'lucide-react';

interface AttributeGridProps {
  character: Partial<WaifuCharacter>;
}

export const AttributeGrid: React.FC<AttributeGridProps> = ({ character }) => {
  const {
    styleData,
    ethnicityData,
    ageData,
    eyeColorData,
    hairStyleData,
    hairColorData,
    bodyTypeData,
    breastSizeData,
    buttSizeData,
    personalityData,
    relationshipData,
    voiceData,
    occupationData,
    hobbiesData,
    clothingData
  } = getAttributeData(character);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
      <AttributeCard {...styleData} />
      <AttributeCard {...ethnicityData} />
      <AttributeCard {...ageData} />
      <AttributeCard {...eyeColorData} />
      <AttributeCard {...hairStyleData} />
      <AttributeCard {...hairColorData} />
      <AttributeCard {...bodyTypeData} />
      <AttributeCard {...breastSizeData} />
      <AttributeCard {...buttSizeData} />
      <AttributeCard {...personalityData} icon={<Brain size={24} className="text-white" />} />
      <AttributeCard {...relationshipData} />
      <AttributeCard {...voiceData} icon={<Volume2 size={24} className="text-white" />} />
      <AttributeCard {...occupationData} icon={<Briefcase size={24} className="text-white" />} />
      <AttributeCard {...hobbiesData} icon={<Gamepad size={24} className="text-white" />} />
      <AttributeCard {...clothingData} icon={<Shirt size={24} className="text-white" />} />
    </div>
  );
};