import React from 'react';

interface ColorButtonProps {
  color: string;
  label: string;
  selected: boolean;
  onClick: () => void;
  backgroundColor: string;
  borderColor?: string;
  textColor?: string;
  gradient?: boolean;
}

export const ColorButton: React.FC<ColorButtonProps> = ({
  color,
  label,
  selected,
  onClick,
  backgroundColor,
  borderColor,
  textColor = 'white',
  gradient = false
}) => (
  <button
    onClick={onClick}
    data-field="hairColor"
    className={`
      w-full py-3 sm:py-2.5 px-4 rounded-lg font-bold transition-all flex items-center justify-center
      ${selected 
        ? 'ring-2 ring-[#ff6b6b] scale-105 shadow-lg' 
        : 'hover:scale-102'
      }
      ${gradient ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-[length:200%_200%] animate-gradient' : ''}
      ${color === 'Multicolor' ? '!bg-[url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3ClinearGradient id=\'g\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' stop-color=\'%23ff0000\'/%3E%3Cstop offset=\'25%25\' stop-color=\'%23ffff00\'/%3E%3Cstop offset=\'50%25\' stop-color=\'%2300ff00\'/%3E%3Cstop offset=\'75%25\' stop-color=\'%230000ff\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23ff00ff\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23g)\'/%3E%3C/svg%3E")] !bg-cover !bg-center' : ''}
    `}
    style={{
      ...(!gradient && color !== 'Multicolor' && { backgroundColor }),
      color: textColor
    }}
  >
    <span className="text-center">{label}</span>
  </button>
);