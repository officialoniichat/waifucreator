import { HairColor } from '../../../types';

interface HairColorOption {
  type: HairColor;
  backgroundColor: string;
  borderColor?: string;
  textColor?: string;
  gradient?: boolean;
}

export const animeHairColorOptions: HairColorOption[] = [
  {
    type: 'Blonde',
    backgroundColor: '#D4B483',
  },
  {
    type: 'Brunette',
    backgroundColor: '#8B4513',
  },
  {
    type: 'Black',
    backgroundColor: '#000000',
  },
  {
    type: 'Redhead',
    backgroundColor: '#CD5C5C',
  },
  {
    type: 'Pink',
    backgroundColor: '#FF69B4',
  },
  {
    type: 'White',
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
  },
  {
    type: 'Blue',
    backgroundColor: '#4682B4',
  },
  {
    type: 'Green',
    backgroundColor: '#3CB371',
  },
  {
    type: 'Purple',
    backgroundColor: '#9370DB',
  },
  {
    type: 'Multicolor',
    backgroundColor: 'transparent',
    gradient: true
  }
];