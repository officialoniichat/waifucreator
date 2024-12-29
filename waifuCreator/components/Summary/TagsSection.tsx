import React from 'react';

interface TagsSectionProps {
  sections: Array<{ label: string; items: string[]; }>;
}

export const TagsSection: React.FC<TagsSectionProps> = ({ sections }) => (
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