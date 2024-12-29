import React from 'react';
import { WaifuCharacter } from '../types';
import { Volume2, BookOpen, Star } from 'lucide-react';

interface SummaryProps {
  character: Partial<WaifuCharacter>;
}

const AttributeContainer = ({ 
  label, 
  imageSrc,
  icon,
  className = ''
}: {
  label: string;
  imageSrc?: string;
  icon?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`bg-[#1a1a1a] rounded-lg overflow-hidden w-full ${className}`}>
      <div className="aspect-square relative">
        {imageSrc ? (
          <img src={imageSrc} alt={label} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#2a2a2a]">
            {icon}
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 backdrop-blur-sm">
          <h3 className="text-gray-400 text-sm font-medium">{label}</h3>
        </div>
      </div>
    </div>
  );
};

const TagsSection = ({ 
  sections 
}: { 
  sections: Array<{ label: string; items: string[]; }>;
}) => (
  <div className="grid grid-cols-3 gap-6">
    {sections.map(({ label, items }) => (
      <div key={label}>
        <h3 className="text-gray-400 text-sm mb-2">{label}</h3>
        <div className="flex flex-wrap gap-1.5">
          {items.map((item) => (
            <div key={item} className="px-3 py-1.5 rounded-full bg-[#1a1a1a] text-white text-sm">
              {item}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const Summary: React.FC<SummaryProps> = ({ character }) => {
  const allItems = [
    {
      label: 'Style',
      imageSrc: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/f0d8bcd4-5dfb-47ea-6e67-20e7dbc69300/mobile'
    },
    {
      label: 'Ethnicity',
      imageSrc: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/fa818a4a-76ae-4419-d6b3-363f454b3c00/mobile'
    },
    {
      label: 'Age',
      icon: <span className="text-2xl font-bold text-white">24</span>
    },
    {
      label: 'Eyes Color',
      imageSrc: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/bed007fa-b60c-4590-87b7-fb8639570600/mobile'
    },
    {
      label: 'Hair Style',
      imageSrc: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/c6f61cc1-a507-48f2-468f-b7814a37ba00/mobile'
    },
    {
      label: 'Hair Color',
      icon: <div className="w-full h-full bg-black" />
    },
    {
      label: 'Body Type',
      imageSrc: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/43d03cd6-65ce-4364-4331-d857bda71f00/mobile'
    },
    {
      label: 'Breast Size',
      imageSrc: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/efea3c57-21fc-43f0-654b-5529050e0300/mobile'
    },
    {
      label: 'Butt Size',
      imageSrc: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/5eaf4b04-9646-4b5b-287b-af586c8bf700/mobile'
    },
    {
      label: 'Personality',
      icon: <Star className="w-8 h-8 text-yellow-400" />
    },
    {
      label: 'Relationship',
      icon: <BookOpen className="w-8 h-8 text-blue-400" />
    },
    {
      label: 'Voice',
      icon: <Volume2 className="w-8 h-8 text-purple-400" />
    }
  ];

  const tagSections = [
    {
      label: 'Occupation',
      items: character.occupation ? [character.occupation] : []
    },
    {
      label: 'Hobbies',
      items: character.hobbies || []
    },
    {
      label: 'Clothing',
      items: character.clothing ? [character.clothing] : []
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white text-center">Summary</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-[1200px] mx-auto">
        {allItems.map((item) => (
          <AttributeContainer key={item.label} {...item} />
        ))}
      </div>

      <TagsSection sections={tagSections} />
    </div>
  );
};