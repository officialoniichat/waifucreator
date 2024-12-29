import React, { useState, useEffect, useMemo } from 'react';
import { WaifuCharacter } from '../../../types';
import { generateImageFromPrompt } from '@/waifuCreator/util/imageGeneration';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../../../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/AuthContext';
import toast from 'react-hot-toast';

interface GeneratedImageStepProps {
  character: Partial<WaifuCharacter>;
  onCharacterUpdate: (updates: Partial<WaifuCharacter>) => void;
  onRegenerate: () => void;  // Not used here, kept for compatibility
}

/**
 * Generates a text prompt based on the character's attributes.
 */
function getPromptFromCharacter(character: Partial<WaifuCharacter>): string {
  const {
    bodyType = 'normal',
    breastSize = 'medium',
    ethnicity = 'unspecified ethnicity',
    age = 'young adult',
    hairColor = 'brown',
    hairStyle = 'medium-length',
    eyeColor = 'brown',
    clothing = 'casual clothes',
  } = character;

  return `((masterpiece, best quality, anime style)), (1girl, front view portrait, looking at viewer, waist up shot:1.3),
  (((${bodyType} body type with ${breastSize} breasts)):1.4),
  (((clean ${ethnicity} skin)):1.4),
  (((${age} years old)):1.4),
  (((${hairColor} ${hairStyle} hair)):1.4),
  (((${eyeColor} eyes, standard anime eyes)):1.4),
  (((wearing ${clothing})):1.3),
  soft lighting, cel shading, anime key visuals style, ((simple clear background))`;
}

export const GeneratedImageStep: React.FC<GeneratedImageStepProps> = ({ character, onCharacterUpdate }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [isCreatingCharacter, setIsCreatingCharacter] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const localGeneratedImage = character.generatedImage;
  const localImagePrompt = character.imagePrompt;

  const currentPrompt = useMemo(() => getPromptFromCharacter(character), [character]);

  const hasImage = !!localGeneratedImage;
  const needsUpdate = hasImage && localImagePrompt && currentPrompt !== localImagePrompt;

  /**
   * Generates a new image from the current prompt and updates character state via onCharacterUpdate.
   */
  const generateImage = async () => {
    if (!currentPrompt) return;
    setIsGeneratingImage(true);
    setError(null);

    try {
      const imageUrl = await generateImageFromPrompt(currentPrompt);
      onCharacterUpdate({ generatedImage: imageUrl, imagePrompt: currentPrompt });
      toast.success('Image generated successfully!');
    } catch (err) {
      console.error('Image generation error:', err);
      setError('Failed to generate image. Please try again.');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  /**
   * Finalizes the character by creating a custom character document in Firestore.
   */
  const createCustomCharacter = async () => {
    setIsCreatingCharacter(true);
    setError(null);

    try {
      if (!currentUser) throw new Error("No user is logged in.");
      if (!localGeneratedImage) throw new Error("No generated image available to finalize.");

      const customCharacterId = `${currentUser.uid}_custom_${Date.now()}`;
      const persona = `${character.personality || 'Unknown personality'}, ${character.age} years old, ${character.ethnicity} background.
        ${character.bodyType} body type, ${character.breastSize} breasts, 
        ${character.hairColor} ${character.hairStyle} hair, ${character.eyeColor} eyes,
        ${character.occupation} who ${character.hobbies?.join(", ")},
        wearing ${character.clothing}.`;

      const customCharacter = {
        category: "custom",
        categoryArr: ["custom"],
        character_persona: persona,
        description: `${character.personality} ${character.occupation}`,
        displayName: character.name || "Custom Character",
        looks: `((${character.bodyType} body type with ${character.breastSize} breasts)), ((clean ${character.ethnicity} skin)), ((${character.age} years old)), ((${character.hairColor} ${character.hairStyle} hair)), ((${character.eyeColor} eyes)), ((wearing ${character.clothing}))`,
        photoURL: localGeneratedImage,
        generatedImage: localGeneratedImage,
        uid: customCharacterId
      };

      const customCharRef = doc(db, "customCharacters", customCharacterId);
      await setDoc(customCharRef, customCharacter);

      // Optionally link this custom character to the user's document as well
      await setDoc(doc(db, "users", currentUser.uid), { customCharacter: customCharacterId }, { merge: true });

      toast.success('Character finalized successfully!');
      navigate("/yourwaifu");
    } catch (err) {
      console.error("Error creating custom character:", err);
      setError("Failed to create character. Please try again.");
    } finally {
      setIsCreatingCharacter(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-center space-y-2 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Your Waifu
        </h2>
        <p className="text-white/80 text-sm sm:text-base">
          Meet {character.name || 'your waifu'} - Ready to start a conversation!
        </p>
      </div>

      <div className="relative w-full max-w-[400px] aspect-square rounded-xl overflow-hidden shadow-xl border-2 border-[#7b89ef]/30">
        {(isGeneratingImage || isCreatingCharacter) && (
          <div className="absolute inset-0 z-10 bg-[#4c5eeb]/50 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
            <p className="text-white font-medium text-sm text-center px-4">
              {isCreatingCharacter ? 'Creating your character...' : 'Generating your waifu image...'}
            </p>
          </div>
        )}

        {error && !isGeneratingImage && !isCreatingCharacter && (
          <div className="absolute inset-0 z-10 bg-[#4c5eeb]/50 backdrop-blur-sm flex flex-col items-center justify-center p-4">
            <div className="text-white text-center space-y-3">
              <p className="text-lg font-medium">{error}</p>
              <button
                onClick={generateImage}
                className="px-4 py-2 bg-white text-[#4c5eeb] rounded-lg hover:bg-opacity-90 transition-colors text-sm"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {!error && localGeneratedImage && !isGeneratingImage && !isCreatingCharacter && (
          <div className="relative group">
            <img
              src={localGeneratedImage}
              alt="Generated Waifu"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        {!error && !localGeneratedImage && !isGeneratingImage && !isCreatingCharacter && (
          <div className="flex items-center justify-center h-full w-full bg-[#4c5eeb]/20 text-white text-center p-4">
            No image available. Click "Generate Image" to create one.
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-4 w-full max-w-[400px] px-4">
        {needsUpdate && (
          <div className="bg-[#4c5eeb]/30 border border-[#7b89ef] rounded-lg p-3 w-full">
            <p className="text-white text-center text-sm">
              Your character details have changed since this image was generated.<br />
              <strong>Regenerate the image</strong> to see the latest updates!
            </p>
          </div>
        )}

        <div className="flex flex-col gap-3 w-full">
          {localGeneratedImage && !isGeneratingImage && !isCreatingCharacter && (
            <>
              <button
                onClick={createCustomCharacter}
                disabled={isCreatingCharacter || !localGeneratedImage}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#8e4ceb] to-[#6bc0ee] text-white 
                  transition-all border border-[#ef7be5] hover:shadow-lg hover:scale-[1.02] active:scale-100
                  disabled:opacity-50 disabled:cursor-not-allowed"
              > 
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white transition-transform text-base">
                    {isCreatingCharacter ? 'Creating Character...' : 'Finalize Character'}
                  </span>
                </div>
              </button>
              
              <button
  onClick={generateImage}
  disabled={isGeneratingImage || isCreatingCharacter}
  className={`w-full px-6 py-3 rounded-lg text-white transition-all border border-[#ef7be5]
    ${isGeneratingImage || isCreatingCharacter
      ? 'bg-gradient-to-r from-[#8e4ceb]/50 to-[#6bc0ee]/50 cursor-not-allowed'
      : 'bg-gradient-to-r from-[#4b4794] to-[#9471c6] hover:shadow-lg hover:scale-[1.02] active:scale-100'}`}
>
  {isGeneratingImage ? (
    <div className="flex items-center justify-center gap-2">
      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
      <span>Generating...</span>
    </div>
  ) : (
    'Regenerate Image'
  )}
</button>
            </>
          )}

          {!localGeneratedImage && !isGeneratingImage && !isCreatingCharacter && (
            <button
              onClick={generateImage}
              className="w-full px-6 py-3 rounded-lg bg-[#4c5eeb] text-white border border-[#7b89ef]
                hover:bg-[#3b4eda] hover:shadow-lg hover:scale-[1.02] active:scale-100 transition-all text-base"
            >
              Generate Image
            </button>
          )}
        </div>

        <p className="text-white text-center text-xs max-w-md opacity-80">
          Not happy with the result or made changes since last generation? Click "Regenerate" to create a new image that reflects the latest details.
        </p>
      </div>
    </div>
  );
};
