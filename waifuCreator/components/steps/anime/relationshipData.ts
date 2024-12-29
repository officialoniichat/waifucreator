import { Relationship } from '../../../types';
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  Heart,
  Sparkles,
  HeartHandshake,
  Crown,
  Users,
  Star,
  UserPlus,
  Home
} from 'lucide-react';

interface RelationshipOption {
  type: Relationship;
  Icon: typeof User;
  color: string;
}

export const relationshipOptions: RelationshipOption[] = [
  {
    type: 'Stranger',
    Icon: User,
    color: 'text-gray-400'
  },
  {
    type: 'School Mate',
    Icon: GraduationCap,
    color: 'text-blue-400'
  },
  {
    type: 'Colleague',
    Icon: Briefcase,
    color: 'text-amber-400'
  },
  {
    type: 'Mentor',
    Icon: BookOpen,
    color: 'text-cyan-400'
  },
  {
    type: 'Girlfriend',
    Icon: Heart,
    color: 'text-pink-400'
  },
  {
    type: 'Sex Friend',
    Icon: Sparkles,
    color: 'text-purple-400'
  },
  {
    type: 'Wife',
    Icon: HeartHandshake,
    color: 'text-yellow-400'
  },
  {
    type: 'Mistress',
    Icon: Crown,
    color: 'text-amber-400'
  },
  {
    type: 'Friend',
    Icon: Users,
    color: 'text-orange-400'
  },
  {
    type: 'Best Friend',
    Icon: Star,
    color: 'text-indigo-400'
  },
  {
    type: 'Step Sister',
    Icon: UserPlus,
    color: 'text-yellow-400'
  },
  {
    type: 'Step Mom',
    Icon: Home,
    color: 'text-red-400'
  }
];