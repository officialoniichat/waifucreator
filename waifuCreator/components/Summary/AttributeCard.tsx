import React from 'react';

interface AttributeCardProps {
  label: string;
  value?: string;
  imageSrc?: string;
  icon?: React.ReactNode;
  chips?: string[];
  className?: string;
}

export const AttributeCard: React.FC<AttributeCardProps> = ({ 
  label, 
  value, 
  imageSrc, 
  icon,
  chips,
  className = ''
}) => (
  <div className={`relative ${className}`}>
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
      {imageSrc ? (
        <div className="aspect-square">
          <img src={imageSrc} alt={value || ''} className="w-full h-full object-cover" />
        </div>
      ) : icon ? (
        <div className="aspect-square flex items-center justify-center bg-[#2a2a2a]">
          {icon}
        </div>
      ) : value ? (
        <div className="aspect-square flex items-center justify-center bg-[#2a2a2a]">
          <span className="text-2xl font-bold text-white">{value}</span>
        </div>
      ) : (
        <div className="aspect-square bg-[#2a2a2a]" />
      )}
      <div className="absolute bottom-0 left-0 right-0 p-1 sm:p-2 bg-black/60 backdrop-blur-sm">
        {chips ? (
          <>
            <div className="text-gray-400 text-[10px] sm:text-xs hidden sm:block">{label}</div>
            <div className="text-gray-400 text-[10px] sm:text-xs block sm:hidden">{label}:</div>
            <div className="flex flex-wrap gap-0.5 sm:gap-1">
              {chips.map((chip) => (
                <span key={chip} className="px-1 sm:px-1.5 py-0.5 rounded-full bg-[#2a2a2a] text-white text-[8px] sm:text-xs">
                  {chip}
                </span>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-gray-400 text-[10px] sm:text-xs hidden sm:block">{label}</div>
            <div className="text-white font-medium text-[10px] sm:text-sm truncate hidden sm:block">{value}</div>
            <div className="text-[10px] sm:text-sm truncate block sm:hidden">
              <span className="text-gray-400">{label}:</span>{' '}
              <span className="text-white font-medium">{value}</span>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
);