import React from 'react';

interface TagProps {
  label: string;
}

export const Tag: React.FC<TagProps> = ({ label }) => (
  <span className="px-3 py-1 rounded-full bg-[#1a1a1a] text-white text-sm">
    {label}
  </span>
);