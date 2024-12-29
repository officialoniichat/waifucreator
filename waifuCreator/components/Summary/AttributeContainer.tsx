import React from 'react';

interface AttributeContainerProps {
  value: string;
  imageSrc?: string;
  icon?: React.ReactNode;
}

export const AttributeContainer: React.FC<AttributeContainerProps> = ({ 
  value,
  imageSrc,
  icon,
}) => (
  <div className="aspect-square relative">
    <div className="w-full h-full bg-[#1a1a1a] rounded-lg overflow-hidden">
      {imageSrc ? (
        <>
          <img src={imageSrc} alt={value} className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center">
            <span className="px-3 py-1 rounded-full bg-black/75 text-white text-sm backdrop-blur-sm">
              {value}
            </span>
          </div>
        </>
      ) : icon ? (
        <>
          <div className="w-full h-full flex items-center justify-center bg-[#2a2a2a]">
            {icon}
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center">
            <span className="px-3 py-1 rounded-full bg-black/75 text-white text-sm backdrop-blur-sm">
              {value}
            </span>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-[#2a2a2a]">
          <span className="text-2xl font-bold text-white">{value}</span>
        </div>
      )}
    </div>
  </div>
);