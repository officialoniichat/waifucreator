import React from 'react';
import { WaifuCharacter } from '../../types';
import { Volume2 } from 'lucide-react';
import { EditButton } from './EditButton';
import { EditableContainer } from './EditableContainer';
import { Tag } from './Tag';
import { AttributeContainer } from './AttributeContainer';
import { getAttributeImage, getAgeDisplay } from './utils';

interface SummaryProps {
  character: Partial<WaifuCharacter>;
  onEdit: (step: number) => void;
  isEditMode: boolean;
  onToggleEdit: () => void;
}

export const Summary: React.FC<SummaryProps> = ({ 
  character, 
  onEdit, 
  isEditMode,
  onToggleEdit
}) => {
  const tagCategories = [
    {
      label: 'Occupation',
      items: character.occupation ? [character.occupation] : [],
      step: 6
    },
    {
      label: 'Hobbies',
      items: character.hobbies || [],
      step: 6
    },
    {
      label: 'Clothing',
      items: character.clothing ? [character.clothing] : [],
      step: 8
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">Summary</h2>
        <EditButton isEditing={isEditMode} onToggleEdit={onToggleEdit} />
      </div>

      {/* Editable Name Section */}
      <EditableContainer isEditing={isEditMode} onEdit={() => onEdit(9)}>
        <div className="mb-6">
          <h3 className="text-gray-300 text-sm mb-1">Name</h3>
          <span className="text-white text-2xl font-bold">{character.name || 'Unnamed'}</span>
        </div>
      </EditableContainer>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-[1400px] mx-auto">
        <EditableContainer isEditing={isEditMode} onEdit={() => onEdit(0)}>
          <AttributeContainer
            value={character.style || ''}
            imageSrc={getAttributeImage(character, 'style')}
          />
        </EditableContainer>
        
        <EditableContainer isEditing={isEditMode} onEdit={() => onEdit(1)}>
          <AttributeContainer
            value={character.ethnicity || ''}
            imageSrc={getAttributeImage(character, 'ethnicity')}
          />
        </EditableContainer>

        <EditableContainer isEditing={isEditMode} onEdit={() => onEdit(2)}>
          <AttributeContainer
            value={getAgeDisplay(character.age)}
          />
        </EditableContainer>

        <EditableContainer isEditing={isEditMode} onEdit={() => onEdit(3)}>
          <AttributeContainer
            value={character.eyeColor || ''}
            imageSrc={getAttributeImage(character, 'eyeColor')}
          />
        </EditableContainer>

        <EditableContainer isEditing={isEditMode} onEdit={() => onEdit(3)}>
          <AttributeContainer
            value={character.hairStyle || ''}
            imageSrc={getAttributeImage(character, 'hairStyle')}
          />
        </EditableContainer>

        <EditableContainer isEditing={isEditMode} onEdit={() => onEdit(3)}>
          <AttributeContainer
            value={character.hairColor || ''}
          />
        </EditableContainer>

        <EditableContainer isEditing={isEditMode} onEdit={() => onEdit(4)}>
          <AttributeContainer
            value={character.bodyType || ''}
            imageSrc={getAttributeImage(character, 'bodyType')}
          />
        </EditableContainer>

        <EditableContainer isEditing={isEditMode} onEdit={() => onEdit(4)}>
          <AttributeContainer
            value={character.breastSize || ''}
            imageSrc={getAttributeImage(character, 'breastSize')}
          />
        </EditableContainer>

        <EditableContainer isEditing={isEditMode} onEdit={() => onEdit(4)}>
          <AttributeContainer
            value={character.buttSize || ''}
            imageSrc={getAttributeImage(character, 'buttSize')}
          />
        </EditableContainer>

        <EditableContainer isEditing={isEditMode} onEdit={() => onEdit(5)}>
          <AttributeContainer
            value={character.personality || ''}
            icon={<span className="text-2xl">⭐</span>}
          />
        </EditableContainer>

        <EditableContainer isEditing={isEditMode} onEdit={() => onEdit(7)}>
          <AttributeContainer
            value={character.relationship || ''}
            icon={<span className="text-2xl">💎</span>}
          />
        </EditableContainer>

        <EditableContainer isEditing={isEditMode} onEdit={() => onEdit(5)}>
          <AttributeContainer
            value={character.voice || ''}
            icon={<Volume2 className="w-8 h-8 text-purple-400" />}
          />
        </EditableContainer>
      </div>

      <div className="flex justify-between gap-4">
        {tagCategories.map(category => (
          <EditableContainer 
            key={category.label} 
            isEditing={isEditMode} 
            onEdit={() => onEdit(category.step)}
            className="flex-1"
          >
            <div>
              <h3 className="text-gray-400 text-sm mb-2">{category.label}</h3>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map(item => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </div>
          </EditableContainer>
        ))}
      </div>
    </div>
  );
};
