export type Style = 'Realistic' | 'Anime';
export type Ethnicity = 'Caucasian' | 'Latina' | 'Asian' | 'Arab' | 'Black/Afro';
export type Age = 'Teen(18+)' | '20s' | '30s';
export type EyeColor = 'Brown' | 'Blue' | 'Green' | 'Yellow' | 'Red';
export type HairStyle = 'Straight' | 'Braids' | 'Bangs' | 'Curly' | 'Bun' | 'Short' | 'Long' | 'Ponytail' | 'Pigtails';
export type HairColor = 'Blonde' | 'Brunette' | 'Black' | 'Redhead' | 'Pink' | 'White' | 'Blue' | 'Green' | 'Purple' | 'Multicolor';
export type BodyType = 'Petite' | 'Slim' | 'Athletic' | 'Voluptuous' | 'Curvy';
export type BreastSize = 'Flat' | 'Small' | 'Medium' | 'Large' | 'Huge';
export type ButtSize = 'Small' | 'Medium' | 'Large' | 'Skinny' | 'Athletic';
export type Personality = 'Caregiver' | 'Sage' | 'Innocent' | 'Jester' | 'Temptress' | 'Dominant' | 'Submissive' | 'Lover' | 'Nympho' | 'Mean' | 'Confidant' | 'Experimenter';
export type Voice = 'Cute' | 'Britain' | 'American' | 'Asian' | 'Sweet' | 'Mature' | 'Smoky' | 'Black' | 'Malicious';
export type Occupation = 'Massage Therapist' | 'Dentist' | 'Nutritionist' | 'Fitness Coach' | 'Pharmacist' | 'Hairdresser' | 'Makeup Artist' | 'Gynecologist' | 'Librarian' | 'Secretary' | 'Social Worker' | 'Fashion Designer' | 'Interior Designer' | 'Cook' | 'Designer' | 'Stylist' | 'Esthetician' | 'Yoga Instructor' | 'Flight Attendant' | 'Doctor' | 'Nurse' | 'Teacher' | 'Firefighter' | 'Police Officer' | 'Soldier' | 'Dancer' | 'Singer/Musician' | 'Spy' | 'Plane Pilot' | 'Professional Athlete' | 'Movie Star/Actress' | 'Photographer' | 'Artist' | 'Scientist' | 'Writer' | 'Lawyer' | 'Student' | 'Life Coach' | 'Kindergarten Teacher' | 'Florist' | 'Baker' | 'Jewelry Designer' | 'Soldier/Military Personnel' | 'Astronaut' | 'Model';
export type Hobby = 'Fitness' | 'Vlogging' | 'Traveling' | 'Hiking' | 'Gaming' | 'Parties' | 'Series' | 'Anime' | 'Cosplay' | 'Self-Development' | 'Writing' | 'Diy Crafting' | 'Veganism' | 'Photography' | 'Volunteering' | 'Cars' | 'Art' | 'Watching Netflix' | 'Manga And Anime' | 'Martial Arts';
export type Relationship = 'Stranger' | 'School Mate' | 'Colleague' | 'Mentor' | 'Girlfriend' | 'Sex Friend' | 'Wife' | 'Mistress' | 'Friend' | 'Best Friend' | 'Step Sister' | 'Step Mom';
export type Clothing = 'Bikini' | 'Pencil Dress' | 'Long Dress' | 'Woman Basketball Jersey' | 'Cheerleader' | 'Skirt' | 'Tennis' | 'Soccer' | 'Swimsuit' | 'Lab Coat' | 'Santa Claus' | 'Sailor' | 'Pyjamas' | 'Sport' | 'Fancy Dress' | 'Carnival' | 'Wedding Dress' | 'Flight Attendant' | 'Clown' | 'Jeans' | 'Latex Outfit' | 'Princess Dress' | 'Corset' | 'Yoga Outfit' | 'Lingerie' | 'Leggings' | 'Summer Dress' | 'School Outfit' | 'Witch' | 'Leather Outfit' | 'Maid' | 'Woman Medieval Armor' | 'Cowboy' | 'Viking' | 'Casual' | 'Nurse' | 'Police' | 'Steampunk' | 'Superhero' | 'Teacher' | 'Firefighter' | 'Military' | 'Construction' | 'Long Coat' | 'Ninja' | 'Angel' | 'Barista' | 'Belly Dancer' | 'Goth' | 'Pirate' | 'Prisoner' | 'Onesie' | 'Tutu' | 'Poncho' | 'Hiphop' | 'Skatepark' | 'Adventurer' | 'Lumberjack' | 'Golf' | 'Hijab' | 'Oversized Shirt' | 'Tribal' | 'Secretary' | 'Pop Star' | 'Hoodie' | 'Race Driver';

export interface WaifuCharacter {
  style: Style;
  ethnicity: Ethnicity;
  age: Age;
  eyeColor: EyeColor;
  hairStyle: HairStyle;
  hairColor: HairColor;
  bodyType: BodyType;
  breastSize: BreastSize;
  buttSize: ButtSize;
  personality: Personality;
  voice: Voice;
  occupation: Occupation;
  hobbies: Hobby[];
  relationship: Relationship;
  clothing: Clothing;
  generatedImage?: string;
  name: string;


}