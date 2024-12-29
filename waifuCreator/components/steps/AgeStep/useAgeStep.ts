import { useMemo } from 'react';
import type { Age } from '../../../types';

export const useAgeStep = () => {
  const ageOptions: Age[] = useMemo(() => ['Teen(18+)', '20s', '30s'], []);

  const getAgeDisplay = (age: Age): string => {
    switch (age) {
      case 'Teen(18+)':
        return '19';
      case '20s':
        return '25';
      case '30s':
        return '35';
      default:
        return '';
    }
  };

  return {
    ageOptions,
    getAgeDisplay,
  };
};