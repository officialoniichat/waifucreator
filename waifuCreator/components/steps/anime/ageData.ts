import { Age } from '../../../types';

interface AgeOption {
  type: Age;
  img: string;
}

export const animeAgeOptions: AgeOption[] = [
  {
    type: 'Teen(18+)',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/a533dfc3-6cf3-4f2b-121a-84df923d6500/mobile'
  },
  {
    type: '20s',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/f1c49983-4a22-4065-7fe8-aea5de46dc00/mobile'
  },
  {
    type: '30s',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/9a5062df-29d3-4cf6-97a9-23c4e6074900/mobile'
  }
];