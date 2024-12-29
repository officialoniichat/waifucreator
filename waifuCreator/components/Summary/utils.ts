import { WaifuCharacter } from '../../types';
import { styleOptions } from '../steps/styleData';
import { animeEthnicityOptions } from '../steps/anime/ethnicityData';
import { animeEyeColorOptions } from '../steps/anime/eyeColorData';
import { animeHairStyleOptions } from '../steps/anime/hairStyleData';
import { animeBodyTypeOptions, animeBreastSizeOptions, animeButtSizeOptions } from '../steps/anime/bodyData';

export const getImageForAttribute = (
  attribute: string | undefined,
  options: Array<{ type: string; img: string }>
): string | undefined => {
  if (!attribute) return undefined;
  return options.find(opt => opt.type === attribute)?.img;
};

export const getAttributeImage = (character: Partial<WaifuCharacter>, attribute: keyof WaifuCharacter) => {
  const value = character[attribute];
  if (!value) return undefined;

  switch (attribute) {
    case 'style':
      return getImageForAttribute(value as string, styleOptions);
    case 'ethnicity':
      return getImageForAttribute(value as string, animeEthnicityOptions);
    case 'eyeColor':
      return getImageForAttribute(value as string, animeEyeColorOptions);
    case 'hairStyle':
      return getImageForAttribute(value as string, animeHairStyleOptions);
    case 'bodyType':
      return getImageForAttribute(value as string, animeBodyTypeOptions);
    case 'breastSize':
      return getImageForAttribute(value as string, animeBreastSizeOptions);
    case 'buttSize':
      return getImageForAttribute(value as string, animeButtSizeOptions);
    default:
      return undefined;
  }
};

export const getAgeDisplay = (age?: string): string => {
  if (!age) return '';
  switch (age) {
    case 'Teen(18+)':
      return '18+';
    case '20s':
      return '24';
    case '30s':
      return '35';
    default:
      return age;
  }
};