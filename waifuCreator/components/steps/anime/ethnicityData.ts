import { Ethnicity } from '../../../types';

interface EthnicityOption {
  type: Ethnicity;
  img: string;
}

export const animeEthnicityOptions: EthnicityOption[] = [
  {
    type: 'Caucasian',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/d097a68c-c61a-4b03-b44a-07765c985200/mobile'
  },
  {
    type: 'Asian',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/fa818a4a-76ae-4419-d6b3-363f454b3c00/mobile'
  },
  {
    type: 'Latina',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/173f95f2-02f5-4de4-228e-71786d098500/mobile'
  },
  {
    type: 'Arab',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/d52689ef-a162-4b4d-f1de-b387d77a0900/mobile'
  },
  {
    type: 'Black/Afro',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/178a6f04-f087-40d8-e9f5-e3002b4e3d00/mobile'
  }
];