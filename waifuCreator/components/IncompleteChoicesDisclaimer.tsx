import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface IncompleteChoicesDisclaimerProps {
  isVisible: boolean;
  onClose: () => void;
  incompleteFields: string[];
}

export const IncompleteChoicesDisclaimer: React.FC<IncompleteChoicesDisclaimerProps> = ({
  isVisible,
  onClose,
  incompleteFields,
}) => {
  useEffect(() => {
    if (isVisible) {
      // Add purple outline to incomplete choices
      incompleteFields.forEach(field => {
        const elements = document.querySelectorAll(`[data-field="${field}"]`);
        elements.forEach(element => {
          element.classList.add('ring-2', 'ring-purple-500', 'ring-opacity-70');
        });
      });

      // Cleanup function to remove outlines
      return () => {
        incompleteFields.forEach(field => {
          const elements = document.querySelectorAll(`[data-field="${field}"]`);
          elements.forEach(element => {
            element.classList.remove('ring-2', 'ring-purple-500', 'ring-opacity-70');
          });
        });
      };
    }
  }, [isVisible, incompleteFields]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md">
      <div className="bg-[#c75d5d] text-white p-4 rounded-lg shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/20 p-2">
            <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
              <span className="block w-4 h-0.5 bg-white rotate-45"></span>
            </div>
          </div>
          <div>
            <div className="font-bold text-lg">Incomplete Choices</div>
            <div className="text-white/90">Please finish your selection</div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
};