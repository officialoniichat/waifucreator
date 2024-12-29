import React from 'react';
import { Pencil } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center mb-8 gap-4 sm:gap-0">
      <div className="flex items-center">
        <Pencil className="w-6 h-6 mr-2 text-white" />
        <h1 className="text-2xl font-bold text-white">Create my AI</h1>
      </div>
      <div className="flex items-center sm:ml-8 space-x-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index < currentStep
                ? 'bg-pink-500'
                : index === currentStep
                ? 'bg-white animate-blink'
                : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};