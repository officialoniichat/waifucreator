import { BodyType, BreastSize, ButtSize } from '../../../types';

interface BodyTypeOption {
  type: BodyType;
  img: string;
}

interface BreastSizeOption {
  type: BreastSize;
  img: string;
}

interface ButtSizeOption {
  type: ButtSize;
  img: string;
}

export const animeBodyTypeOptions: BodyTypeOption[] = [
  {
    type: 'Curvy',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/43d03cd6-65ce-4364-4331-d857bda71f00/mobile'
  },
  {
    type: 'Petite',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/a6ae2105-c1e2-40d3-6542-8ba91917c500/mobile'
  },
  {
    type: 'Slim',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/dd37c5aa-5028-4886-22e0-6be14ceae300/mobile'
  },
  {
    type: 'Voluptuous',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/6eb5bb47-1d3b-47af-eb12-eaab0f2e1100/mobile'
  },
  {
    type: 'Athletic',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/6e3d94c8-0cb5-442b-ccc0-14fec5626f00/mobile'
  }
];

export const animeBreastSizeOptions: BreastSizeOption[] = [
  {
    type: 'Flat',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/b7e7a545-a9fc-44bb-0e31-4a3483f7f000/mobile'
  },
  {
    type: 'Large',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/efea3c57-21fc-43f0-654b-5529050e0300/mobile'
  },
  {
    type: 'Huge',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/2e26e18c-c87f-4d2f-fa59-c19d9c712e00/mobile'
  },
  {
    type: 'Medium',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/d06db249-d897-4531-2861-43413bd78900/mobile'
  },
  {
    type: 'Small',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/fe65fd26-0d6d-4230-a1a8-a7271ed12700/mobile'
  }
];

export const animeButtSizeOptions: ButtSizeOption[] = [
  {
    type: 'Large',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/5eaf4b04-9646-4b5b-287b-af586c8bf700/mobile'
  },
  {
    type: 'Medium',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/04c1a18b-1bd7-4015-d4f5-fd7b106d1900/mobile'
  },
  {
    type: 'Skinny',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/5f68c47c-0edf-4bf5-3562-be1a46d5be00/mobile'
  },
  {
    type: 'Small',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/da3ea107-e0a1-4102-797c-b43b7a325900/mobile'
  },
  {
    type: 'Athletic',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/0aa33980-d4ce-49df-b6f0-ba60e0021800/mobile'
  }
];