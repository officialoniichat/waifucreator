import React from 'react';

interface AnimeNameStepProps {
  name: string;
  onChange: (name: string) => void;
}

export const AnimeNameStep = ({ name, onChange }: AnimeNameStepProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Name Your Character</h2>
        <p className="text-white/80">Choose a name that fits your character's personality</p>
      </div>
      
      <div className="max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            value={name || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter character name..."
            className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 
                     text-white placeholder-white/50 focus:outline-none focus:border-white/40
                     transition-colors"
            maxLength={30}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 text-sm">
            {(name?.length || 0)}/30
          </div>
        </div>
      </div>

      <div className="text-center text-white/60 text-sm">
        This name will be used when interacting with your character
      </div>
    </div>
  );
};