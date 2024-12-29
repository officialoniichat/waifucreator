import React from 'react';
import { Relationship } from '../../../../types';
import { LucideIcon } from 'lucide-react';

interface RelationshipCardProps {
  type: Relationship;
  Icon: LucideIcon;
  selected: boolean;
  onClick: () => void;
  color: string;
}

export const RelationshipCard: React.FC<RelationshipCardProps> = ({
  type,
  Icon,
  selected,
  onClick,
  color
}) => (
  <button
    onClick={onClick}
    data-field="relationship"
    className={`w-full aspect-square p-3 sm:p-4 rounded-lg transition-all ${
      selected
        ? 'bg-[#4c5eeb] border-2 border-[#ff6b6b] ring-2 ring-[#ff6b6b]/50'
        : 'bg-[#c06bee] border-2 border-[#7b89ef] hover:bg-[#625bed]'
    }`}
  >
    <div className="h-full flex flex-col items-center justify-center gap-2 sm:gap-3">
      <Icon size={28} className={color} />
      <span className="text-white font-medium text-sm sm:text-base text-center">{type}</span>
    </div>
  </button>
);