import React, { useEffect, useState } from 'react';

interface ComingSoonDisclaimerProps {
  onClose: () => void;
}

export const ComingSoonDisclaimer: React.FC<ComingSoonDisclaimerProps> = ({ onClose }) => {
  const [progress, setProgress] = useState(100);
  const DURATION = 7000; // 7 seconds
  const UPDATE_INTERVAL = 10; // Update every 10ms for smooth animation

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / DURATION) * 100);
      
      setProgress(remaining);
      
      if (remaining === 0) {
        clearInterval(timer);
        onClose();
      }
    }, UPDATE_INTERVAL);

    return () => clearInterval(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md">
      <div className="bg-[#7b89ef] text-white p-4 rounded-lg shadow-lg">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/20 p-2">
            <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-lg font-bold">!</span>
            </div>
          </div>
          <div>
            <div className="font-bold text-lg">Coming Soon</div>
            <div className="text-white/90">Realistic style is not available yet</div>
          </div>
        </div>
        <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};