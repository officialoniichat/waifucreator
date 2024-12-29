import React from 'react';
import { Pencil } from 'lucide-react';

interface EditableContainerProps {
  children: React.ReactNode;
  isEditing: boolean;
  onEdit: () => void;
  className?: string;
}

export const EditableContainer: React.FC<EditableContainerProps> = ({
  children,
  isEditing,
  onEdit,
  className = ''
}) => {
  return (
    <div 
      className={`relative group ${
        isEditing ? 'animate-wiggle cursor-pointer' : ''
      } ${className}`}
      onClick={isEditing ? onEdit : undefined}
    >
      {isEditing && (
        <div className="absolute top-2 right-2 z-10 bg-[#4c5eeb] rounded-full p-1">
          <Pencil className="w-4 h-4 text-white" />
        </div>
      )}
      {children}
    </div>
  );
};