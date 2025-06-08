
'use server';

/**
 * @fileOverview This file defines a Genkit flow for summarizing the user's photo selections.
 *
 * - summarizeSelections - A function that takes an array of photo choices and returns an AI-powered summary.
 * - SummarizeSelectionsInput - The input type for the summarizeSelections function.
 * - SummarizeSelectionsOutput - The return type for the summarizeSelections function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeSelectionsInputSchema = z.object({
  storyChoices: z.array(z.string()).describe('An array of textual descriptions of photo choices made by the user.'),
});
export type SummarizeSelectionsInput = z.infer<typeof SummarizeSelectionsInputSchema>;

const SummarizeSelectionsOutputSchema = z.object({
  summary: z.string().describe("An AI-powered summary of the user's photo preferences based on their selections."),
  progress: z.string().describe('A short, one-sentence summary of what has been generated.'),
});
export type SummarizeSelectionsOutput = z.infer<typeof SummarizeSelectionsOutputSchema>;

export async function summarizeSelections(input: SummarizeSelectionsInput): Promise<SummarizeSelectionsOutput> {
  return summarizeSelectionsFlow(input);
}

const selectionsPrompt = ai.definePrompt({
  name: 'summarizeSelectionsPrompt',
  input: {schema: SummarizeSelectionsInputSchema},
  output: {schema: SummarizeSelectionsOutputSchema},
  prompt: `You are an expert curator. Please provide a concise and engaging summary of the user's photo preferences based on the following choices they made:\n\n{% each storyChoices %}\n- {{{this}}}{% endeach %}\n\nCreate a brief narrative summary capturing the essence of the user's preferences as revealed by these selections.`,
});

const summarizeSelectionsFlow = ai.defineFlow(
  {
    name: 'summarizeSelectionsFlow',
    inputSchema: SummarizeSelectionsInputSchema,
    outputSchema: SummarizeSelectionsOutputSchema,
  },
  async input => {
    const {output} = await selectionsPrompt(input);
    return {
      ...output!,
      progress: "Generated a summary of the user's photo selections.",
    };
  }
);
