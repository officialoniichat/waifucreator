import { Style } from '../../types';

interface StyleOption {
  type: Style;
  img: string;
}

export const styleOptions: StyleOption[] = [
  {
    type: 'Anime',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/f0d8bcd4-5dfb-47ea-6e67-20e7dbc69300/mobile'
  },
  {
    type: 'Realistic',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/846ff4b3-2f1a-4ef5-da6e-e00935abf000/mobile'
  }
];