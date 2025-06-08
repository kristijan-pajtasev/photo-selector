
'use client';

import { useState, useEffect, useCallback } from 'react';
import { StoryStep } from '@/components/story-step';
import { ResultsDisplay } from '@/components/results-display';
import { LoadingIndicator } from '@/components/loading-indicator';
import { storyStepsData, TOTAL_STORY_STEPS, type StoryStepContent, type StoryImageOption } from '@/lib/story-data';
import { summarizeSelections, type SummarizeSelectionsOutput } from '@/ai/flows/summarize-story';
import { useToast } from "@/hooks/use-toast";
import { Images as ImagesIcon } from 'lucide-react'; // Changed from Image to Images

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userSelections, setUserSelections] = useState<string[]>([]);
  const [currentStoryContent, setCurrentStoryContent] = useState<StoryStepContent | null>(null);
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [finalSummary, setFinalSummary] = useState<string | null>(null);
  const [isSummarizing, setIsSummarizing] = useState(false);
  const { toast } = useToast();

  const fetchStorySegment = useCallback((step: number) => {
    setIsLoadingContent(true);
    // Simulate API delay
    setTimeout(() => {
      const content = storyStepsData.find(s => s.step === step) || null;
      setCurrentStoryContent(content);
      setIsLoadingContent(false);
      if (!content && step <= TOTAL_STORY_STEPS) {
        toast({
          title: "Content Error",
          description: `Could not load content for selection round ${step}. Please try restarting.`,
          variant: "destructive",
        });
      }
    }, 500); // 0.5 second delay
  }, [toast]);

  useEffect(() => {
    if (!showResults) {
      fetchStorySegment(currentStep);
    }
  }, [currentStep, showResults, fetchStorySegment]);

  useEffect(() => {
    if (showResults && userSelections.length === TOTAL_STORY_STEPS && !finalSummary && !isSummarizing) {
      setIsSummarizing(true);
      summarizeSelections({ storyChoices: userSelections }) 
        .then((summaryOutput: SummarizeSelectionsOutput) => { 
          setFinalSummary(summaryOutput.summary);
        })
        .catch(error => {
          console.error("Error summarizing selections:", error);
          setFinalSummary("The Photo Selector encountered an issue and couldn't complete the summary. Please try again.");
           toast({
            title: "AI Summary Failed",
            description: "Could not generate the AI selection summary. Please check the console for errors.",
            variant: "destructive",
          });
        })
        .finally(() => {
          setIsSummarizing(false);
        });
    }
  }, [showResults, userSelections, finalSummary, toast, isSummarizing]);

  const handleImageSelect = (selectedOption: StoryImageOption) => {
    setUserSelections(prev => [...prev, selectedOption.choiceText]);
    if (currentStep < TOTAL_STORY_STEPS) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setUserSelections([]);
    setCurrentStoryContent(null);
    setShowResults(false);
    setFinalSummary(null);
    setIsLoadingContent(true);
    setIsSummarizing(false);
  };

  // Initial load or when restarting
  if (isLoadingContent && !currentStoryContent && !showResults) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 bg-background">
        <LoadingIndicator size={64} />
        <p className="mt-4 text-muted-foreground font-body text-lg">Preparing your photo selection...</p>
      </main>
    );
  }
  
  return (
    <main className="flex flex-col items-center flex-grow p-4 md:p-8 bg-background text-foreground">
      <header className="mb-8 md:mb-12 text-center">
        <h1 className="font-headline text-5xl md:text-6xl text-primary flex items-center justify-center">
          <ImagesIcon className="w-12 h-12 md:w-16 md:h-16 mr-3 md:mr-4" /> {/* Changed icon */}
          Photo Selector
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground mt-2">
          Select your favorite image from each set to discover your preferences.
        </p>
      </header>

      <div className="w-full transition-opacity duration-500 ease-in-out">
        {showResults ? (
          <ResultsDisplay
            userSelections={userSelections}
            storySummary={finalSummary}
            onRestart={handleRestart}
            isSummarizing={isSummarizing}
          />
        ) : (
          <StoryStep
            stepContent={currentStoryContent}
            onImageSelect={handleImageSelect}
            isLoading={isLoadingContent}
            currentStep={currentStep}
            totalSteps={TOTAL_STORY_STEPS}
          />
        )}
      </div>
      
      <footer className="mt-auto pt-8 md:pt-12 text-center">
        <p className="font-body text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Photo Selector. An AI-enhanced experience.
        </p>
      </footer>
    </main>
  );
}
