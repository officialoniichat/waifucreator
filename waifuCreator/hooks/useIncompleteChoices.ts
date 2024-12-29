import { WaifuCharacter } from '../types';

export const useIncompleteChoices = (currentStep: number, character: Partial<WaifuCharacter>) => {
  const getIncompleteChoices = () => {
    switch (currentStep) {
      case 0:
        return !character.style ? ['style'] : [];
      case 1:
        return !character.ethnicity ? ['ethnicity'] : [];
      case 2:
        return !character.age ? ['age'] : [];
      case 3:
        return [
          !character.eyeColor && 'eyeColor',
          !character.hairStyle && 'hairStyle',
          !character.hairColor && 'hairColor',
        ].filter(Boolean) as string[];
      case 4:
        return [
          !character.bodyType && 'bodyType',
          !character.breastSize && 'breastSize',
          !character.buttSize && 'buttSize',
        ].filter(Boolean) as string[];
      case 5:
        return [
          !character.personality && 'personality',
          !character.voice && 'voice',
        ].filter(Boolean) as string[];
      case 6:
        return [
          !character.occupation && 'occupation',
          (!character.hobbies?.length && 'hobbies'),
        ].filter(Boolean) as string[];
      case 7:
        return !character.relationship ? ['relationship'] : [];
      case 8:
        return !character.clothing ? ['clothing'] : [];
      default:
        return [];
    }
  };

  return { getIncompleteChoices };
};