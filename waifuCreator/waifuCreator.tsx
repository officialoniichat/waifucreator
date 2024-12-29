import React, { useState, useEffect, useCallback } from 'react';
import { StepIndicator } from './components/StepIndicator';
import { NavigationButtons } from './components/NavigationButtons';
import { StyleStep } from './components/steps/StyleStep';
import { AnimeEthnicityStep } from './components/steps/anime/AnimeEthnicityStep';
import { AnimeAgeStep } from './components/steps/anime/AnimeAgeStep';
import { AnimeAppearanceStep } from './components/steps/anime/AnimeAppearanceStep';
import { AnimeBodyStep } from './components/steps/anime/AnimeBodyStep';
import { AnimePersonalityStep } from './components/steps/anime/AnimePersonalityStep';
import { AnimeOccupationHobbiesStep } from './components/steps/anime/AnimeOccupationHobbiesStep';
import { AnimeRelationshipStep } from './components/steps/anime/AnimeRelationshipStep';
import { AnimeClothingStep } from './components/steps/anime/AnimeClothingStep';
import { AnimeNameStep } from './components/steps/anime/AnimeNameStep';
import { Summary } from './components/Summary/Summary';
import { IncompleteChoicesDisclaimer } from './components/IncompleteChoicesDisclaimer';
import { ComingSoonDisclaimer } from './components/ComingSoonDisclaimer';
import { useIncompleteChoices } from './hooks/useIncompleteChoices';
import type { WaifuCharacter } from './types';
import MainLayout from '@/components/layout/MainLayout';
import { useNavigate } from "react-router-dom";
import { GeneratedImageStep } from './components/steps/anime/GeneratedImageStep';
import { useAuth } from '../context/AuthContext';
import { debounce } from 'lodash';
import toast from 'react-hot-toast';

const TOTAL_STEPS = 12;
const SAVE_DELAY = 1000;

function isAllStepsComplete(character: Partial<WaifuCharacter>): boolean {
  for (let step = 0; step < 10; step++) {
    const choicesHook = useIncompleteChoices(step, character);
    if (choicesHook.getIncompleteChoices().length > 0) return false;
  }
  return true;
}

function findFirstIncompleteStep(character: Partial<WaifuCharacter>): number {
  for (let step = 0; step < 10; step++) {
    const choicesHook = useIncompleteChoices(step, character);
    if (choicesHook.getIncompleteChoices().length > 0) return step;
  }
  return 10; 
}

function WaifuCreator() {
  const { userData, updateUserData } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [character, setCharacter] = useState<Partial<WaifuCharacter>>(userData?.character || { hobbies: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [showIncompleteDisclaimer, setShowIncompleteDisclaimer] = useState(false);
  const [showComingSoonDisclaimer, setShowComingSoonDisclaimer] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingFromSummary, setEditingFromSummary] = useState(false);
  const [showGeneratedStep, setShowGeneratedStep] = useState(false);
  const navigate = useNavigate();

  const { getIncompleteChoices } = useIncompleteChoices(currentStep, character);

  const handleSave = useCallback(
    async (data: Partial<WaifuCharacter>, step: number) => {
      try {
        setIsSaving(true);
        await updateUserData({ character: data, currentStep: step });
      } catch (error) {
        console.error('Save error:', error);
        toast.error('Failed to save changes');
      } finally {
        setIsSaving(false);
      }
    },
    [updateUserData]
  );

  const debouncedSave = useCallback(
    debounce((data: Partial<WaifuCharacter>, step: number) => handleSave(data, step), SAVE_DELAY),
    [handleSave]
  );

  const isCurrentStepComplete = useCallback(() => {
    return getIncompleteChoices().length === 0;
  }, [getIncompleteChoices]);

  useEffect(() => {
    const loadCharacter = async () => {
      try {
        const char = userData?.character || { hobbies: [] };
        let savedStep = userData?.currentStep ?? 0;

        setCharacter(char);

        if (isAllStepsComplete(char)) {
          if (char.generatedImage) {
            savedStep = 11;
            setShowGeneratedStep(true);
          } else {
            savedStep = 10;
          }
        } else {
          const firstIncomplete = findFirstIncompleteStep(char);
          if (savedStep > firstIncomplete || savedStep >= 10) {
            savedStep = firstIncomplete;
          } else {
            savedStep = firstIncomplete;
          }
        }

        setCurrentStep(savedStep);
      } catch (error) {
        console.error('Load error:', error);
        toast.error('Failed to load character');
      } finally {
        setIsLoading(false);
      }
    };
    loadCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isLoading && character) {
      debouncedSave(character, currentStep);
    }
  }, [character, currentStep, debouncedSave, isLoading]);

  useEffect(() => {
    setShowComingSoonDisclaimer(false);
  }, [currentStep]);

  useEffect(() => {
    if (isCurrentStepComplete()) {
      setShowIncompleteDisclaimer(false);
    }
  }, [character, isCurrentStepComplete]);

  const handleNext = () => {
    if (!isCurrentStepComplete()) {
      setShowIncompleteDisclaimer(true);
      return;
    }

    if (currentStep === 10 && isAllStepsComplete(character)) {
      setShowGeneratedStep(true);
      setCurrentStep(11);
    } else if (currentStep < 10) {
      setCurrentStep((prev) => prev + 1);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentStep === 11) {
      setShowGeneratedStep(false);
      setCurrentStep(10);
      return;
    }

    if (currentStep > 0 && !editingFromSummary) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStyleChange = (style: WaifuCharacter['style']) => {
    if (style === 'Realistic') {
      setShowComingSoonDisclaimer(true);
      return;
    }
    setCharacter((prev) => ({ ...prev, style }));
  };

  const handleEdit = (step: number) => {
    if (isEditMode) {
      setShowGeneratedStep(false);
      setCurrentStep(step);
      setEditingFromSummary(true);
    }
  };

  const handleConfirmChanges = () => {
    setEditingFromSummary(false);
    setIsEditMode(false);
    if (isAllStepsComplete(character)) {
      setCurrentStep(character.generatedImage ? 11 : 10);
      setShowGeneratedStep(!!character.generatedImage);
    } else {
      setCurrentStep(findFirstIncompleteStep(character));
    }
  };

  const handleGenerateCharacter = () => {
    setShowGeneratedStep(true);
    setCurrentStep(11);
  };

  const handleCharacterUpdate = (updates: Partial<WaifuCharacter>) => {
    setCharacter((prev) => ({ ...prev, ...updates }));
  };

  const renderStep = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent" />
        </div>
      );
    }

    switch (currentStep) {
      case 0:
        return <StyleStep value={character.style} onChange={handleStyleChange} />;
      case 1:
        return <AnimeEthnicityStep value={character.ethnicity} onChange={(ethnicity) => handleCharacterUpdate({ ethnicity })} />;
      case 2:
        return <AnimeAgeStep value={character.age} onChange={(age) => handleCharacterUpdate({ age })} />;
      case 3:
        return (
          <AnimeAppearanceStep
            eyeColor={character.eyeColor}
            hairStyle={character.hairStyle}
            hairColor={character.hairColor}
            onChangeEyeColor={(eyeColor) => handleCharacterUpdate({ eyeColor })}
            onChangeHairStyle={(hairStyle) => handleCharacterUpdate({ hairStyle })}
            onChangeHairColor={(hairColor) => handleCharacterUpdate({ hairColor })}
          />
        );
      case 4:
        return (
          <AnimeBodyStep
            bodyType={character.bodyType}
            breastSize={character.breastSize}
            buttSize={character.buttSize}
            onChangeBodyType={(bodyType) => handleCharacterUpdate({ bodyType })}
            onChangeBreastSize={(breastSize) => handleCharacterUpdate({ breastSize })}
            onChangeButtSize={(buttSize) => handleCharacterUpdate({ buttSize })}
          />
        );
      case 5:
        return (
          <AnimePersonalityStep
            personality={character.personality}
            voice={character.voice}
            onChangePersonality={(personality) => handleCharacterUpdate({ personality })}
            onChangeVoice={(voice) => handleCharacterUpdate({ voice })}
          />
        );
      case 6:
        return (
          <AnimeOccupationHobbiesStep
            occupation={character.occupation}
            hobbies={character.hobbies ?? []}
            onChangeOccupation={(occupation) => handleCharacterUpdate({ occupation })}
            onChangeHobbies={(hobbies) => handleCharacterUpdate({ hobbies })}
          />
        );
      case 7:
        return <AnimeRelationshipStep value={character.relationship} onChange={(relationship) => handleCharacterUpdate({ relationship })} />;
      case 8:
        return <AnimeClothingStep value={character.clothing} onChange={(clothing) => handleCharacterUpdate({ clothing })} />;
      case 9:
        return <AnimeNameStep name={character.name} onChange={(name) => handleCharacterUpdate({ name })} />;
      case 10:
        return (
          <Summary
            character={character}
            onEdit={handleEdit}
            isEditMode={isEditMode}
            onToggleEdit={() => setIsEditMode(!isEditMode)}
          />
        );
      case 11:
        return <GeneratedImageStep character={character} onCharacterUpdate={handleCharacterUpdate} onRegenerate={() => console.log('Regenerating image...')} />;
      default:
        return null;
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen px-4 sm:px-8 pt-16 sm:pt-8 pb-20 sm:pb-8">
        <div className="max-w-4xl mx-auto mb-4">
          <button 
            onClick={() => navigate("/yourwaifu")} 
            className="flex items-center text-white hover:opacity-80 transition-opacity"
            aria-label="Go back"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
        </div>
        <IncompleteChoicesDisclaimer
          isVisible={showIncompleteDisclaimer}
          onClose={() => setShowIncompleteDisclaimer(false)}
          incompleteFields={getIncompleteChoices()}
        />
        {showComingSoonDisclaimer && (
          <ComingSoonDisclaimer onClose={() => setShowComingSoonDisclaimer(false)} />
        )}
        <div className="max-w-4xl mx-auto">
          <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-lg p-4 sm:p-8 border border-white/20">
            {renderStep()}
            {!showGeneratedStep && (
              currentStep === 10 ? (
                (!editingFromSummary || !isEditMode) && (
                  <NavigationButtons
                    onPrevious={handlePrevious}
                    onNext={handleGenerateCharacter}
                    showPrevious={true}
                    nextLabel="Bring my AI to life"
                  />
                )
              ) : editingFromSummary ? (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleConfirmChanges}
                    className="px-8 py-2 rounded-lg bg-pink-600 text-white 
             hover:bg-pink-700 transition-colors
             border border-white/20"
                  >
                    Confirm Changes
                  </button>
                </div>
              ) : (
                <NavigationButtons
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  showPrevious={currentStep > 0}
                  nextLabel="Next"
                />
              )
            )}
            {showGeneratedStep && currentStep === 11 && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handlePrevious}
                  className="px-8 py-2 rounded-lg bg-pink-600 text-white 
             hover:bg-pink-700 transition-colors
             border border-white/20"
                >
                  Back to Summary
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {isSaving && (
        <div className="fixed bottom-4 right-4">
          <div className="bg-white/10 backdrop-blur-lg text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
            <span>Saving...</span>
          </div>
        </div>
      )}
    </MainLayout>
  );
}

export default WaifuCreator;
