import React from 'react';
import type { Age } from '../../../types';

interface AgeOptionProps {
  age: Age;
  selected: boolean;
  onClick: () => void;
}

export const AgeOption: React.FC<AgeOptionProps> = ({ age, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-32 h-32 rounded-2xl flex flex-col items-center justify-center
        transition-all duration-200 transform hover:scale-105
        ${selected 
          ? 'bg-pink-500 text-white scale-105 shadow-lg ring-2 ring-pink-400' 
          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }
      `}
    >
      <span className="text-2xl font-bold">{age}</span>
      <span className="text-sm mt-1 opacity-80">
        {age === 'Teen(18+)' ? '18-19' : age === '20s' ? '20-29' : '30-39'}
      </span>
    </button>
  );
};