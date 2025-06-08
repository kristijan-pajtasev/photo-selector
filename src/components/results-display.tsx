
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { RefreshCw, Send } from 'lucide-react';

interface ResultsDisplayProps {
  userSelections: string[];
  storySummary: string | null; // Kept name storySummary for prop compatibility, but represents selection summary
  onRestart: () => void;
  isSummarizing: boolean;
}

export function ResultsDisplay({ userSelections, storySummary, onRestart, isSummarizing }: ResultsDisplayProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-xl animate-fade-in">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl md:text-4xl text-primary">Your Photo Preferences</CardTitle>
        <CardDescription className="font-body text-lg text-muted-foreground">
          A summary of your favorite photo selections.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-headline text-2xl text-secondary-foreground mb-2">Your Selections:</h3>
          <ScrollArea className="h-48 rounded-md border p-4 bg-background">
            <ul className="space-y-2">
              {userSelections.map((selection, index) => (
                <li key={index} className="font-body text-md">
                  <span className="font-semibold text-primary">Round {index + 1}:</span> {selection}
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
        <Separator />
        <div>
          <h3 className="font-headline text-2xl text-secondary-foreground mb-2">Selection Summary:</h3>
          {isSummarizing ? (
             <div className="flex items-center justify-center h-24">
                <Send className="animate-pulse mr-2 h-5 w-5 text-accent" />
                <p className="font-body text-muted-foreground">The Photo Selector is summarizing your preferences...</p>
             </div>
          ) : storySummary ? (
            <p className="font-body text-md leading-relaxed whitespace-pre-wrap">{storySummary}</p>
          ) : (
            <p className="font-body text-md text-destructive">The Photo Selector seems to be resting. Unable to generate a summary at this moment.</p>
          )}
        </div>
        <div className="flex justify-center pt-4">
          <Button onClick={onRestart} size="lg" className="font-headline">
            <RefreshCw className="mr-2 h-5 w-5" />
            Start Over
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
