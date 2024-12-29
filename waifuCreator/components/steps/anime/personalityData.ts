import { Personality } from '../../../types';
import { 
  Heart, 
  Brain, 
  Star, 
  Laugh, 
  Crown, 
  Swords, 
  HeartHandshake, 
  Heart as LoveHeart, 
  Flame, 
  Snowflake, 
  MessageCircle, 
  TestTube
} from 'lucide-react';

interface PersonalityOption {
  type: Personality;
  Icon: typeof Heart; // Lucide icon component type
  description: string;
}

export const personalityOptions: PersonalityOption[] = [
  {
    type: 'Caregiver',
    Icon: Heart,
    description: 'Nurturing, protective, and always there to offer comfort.'
  },
  {
    type: 'Sage',
    Icon: Brain,
    description: 'Wise, reflective, and a source of guidance.'
  },
  {
    type: 'Innocent',
    Icon: Star,
    description: 'Optimistic, naive, and sees world with wonder.'
  },
  {
    type: 'Jester',
    Icon: Laugh,
    description: 'Playful, humorous, and always there to make you laugh.'
  },
  {
    type: 'Temptress',
    Icon: Crown,
    description: 'Flirtatious, playful, and always leaving you wanting more.'
  },
  {
    type: 'Dominant',
    Icon: Swords,
    description: 'Assertive, controlling, and commanding.'
  },
  {
    type: 'Submissive',
    Icon: HeartHandshake,
    description: 'Obedient, yielding, and happy to follow.'
  },
  {
    type: 'Lover',
    Icon: LoveHeart,
    description: 'Romantic, affectionate, and cherishes deep emotional.'
  },
  {
    type: 'Nympho',
    Icon: Flame,
    description: 'Insatiable, passionate, and constantly craving intimacy.'
  },
  {
    type: 'Mean',
    Icon: Snowflake,
    description: 'Cold, dismissive, and often sarcastic.'
  },
  {
    type: 'Confidant',
    Icon: MessageCircle,
    description: 'Trustworthy, a good listener, and always can offer advice.'
  },
  {
    type: 'Experimenter',
    Icon: TestTube,
    description: 'Curious, willing, and always eager to try new things.'
  }
];