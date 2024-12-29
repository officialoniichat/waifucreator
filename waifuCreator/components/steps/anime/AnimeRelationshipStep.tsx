import React from 'react';
import { RelationshipCard } from './relationship/RelationshipCard';
import { relationshipOptions } from './relationshipData';
import { Relationship } from '../../../types';

interface AnimeRelationshipStepProps {
  value?: Relationship;
  onChange: (value: Relationship) => void;
}

export const AnimeRelationshipStep: React.FC<AnimeRelationshipStepProps> = ({
  value,
  onChange
}) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-center">Choose Relationship</h2>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {relationshipOptions.map(({ type, Icon, color }) => (
          <RelationshipCard
            key={type}
            type={type}
            Icon={Icon}
            selected={value === type}
            onClick={() => onChange(type)}
            color={color}
          />
        ))}
      </div>
    </div>
  );
};