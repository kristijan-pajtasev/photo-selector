
'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { StoryStepContent, StoryImageOption } from '@/lib/story-data';
import { LoadingIndicator } from './loading-indicator';

interface StoryStepProps {
  stepContent: StoryStepContent | null;
  onImageSelect: (choice: StoryImageOption) => void;
  isLoading: boolean;
  currentStep: number;
  totalSteps: number;
}

export function StoryStep({ stepContent, onImageSelect, isLoading, currentStep, totalSteps }: StoryStepProps) {
  if (isLoading || !stepContent) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <LoadingIndicator />
        <p className="mt-4 text-muted-foreground font-body">Loading your next set of photos...</p>
      </div>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-xl animate-fade-in">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl md:text-4xl text-primary">Selection Round {currentStep}</CardTitle>
        <CardDescription className="font-body text-lg text-muted-foreground">
          Round {currentStep} of {totalSteps}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="font-body text-lg md:text-xl leading-relaxed text-center">{stepContent.text}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-4">
          {stepContent.images.map((imageOption) => (
            <Button
              key={imageOption.id}
              variant="outline"
              className="h-auto p-0 border-2 border-transparent hover:border-accent focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-300 ease-in-out transform hover:scale-105 group"
              onClick={() => onImageSelect(imageOption)}
              aria-label={`Choose ${imageOption.altText} as your favorite`}
            >
              <div className="flex flex-col items-center w-full rounded-lg overflow-hidden shadow-md bg-card">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={imageOption.imageUrl}
                    alt={imageOption.altText}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={imageOption.dataAiHint}
                    priority={currentStep === 1} 
                  />
                </div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
