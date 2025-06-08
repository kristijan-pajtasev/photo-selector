
'use server';

/**
 * @fileOverview AI flow to suggest photo categories or themes based on the user's previous photo selections.
 *
 * - suggestPhotoCategories - A function that suggests photo categories based on a summary of previous selections.
 * - SuggestPhotoCategoriesInput - The input type for the suggestPhotoCategories function.
 * - SuggestPhotoCategoriesOutput - The return type for the suggestPhotoCategories function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPhotoCategoriesInputSchema = z.object({
  selectionsSummary: z
    .string()
    .describe('A summary of the photo selections made by the user so far.'),
});
export type SuggestPhotoCategoriesInput = z.infer<typeof SuggestPhotoCategoriesInputSchema>;

const SuggestPhotoCategoriesOutputSchema = z.object({
  suggestedCategories: z
    .array(z.string())
    .describe('An array of suggested photo categories or themes the user might like.'),
});
export type SuggestPhotoCategoriesOutput = z.infer<typeof SuggestPhotoCategoriesOutputSchema>;

export async function suggestPhotoCategories(input: SuggestPhotoCategoriesInput): Promise<SuggestPhotoCategoriesOutput> {
  return suggestPhotoCategoriesFlow(input);
}

const categoriesPrompt = ai.definePrompt({
  name: 'suggestPhotoCategoriesPrompt',
  input: {schema: SuggestPhotoCategoriesInputSchema},
  output: {schema: SuggestPhotoCategoriesOutputSchema},
  prompt: `Based on the following summary of a user's photo preferences, suggest three new photo categories or themes they might enjoy exploring next. Each suggestion should be a short, creative idea:

{{{selectionsSummary}}}

Respond with three category suggestions.`,
});

const suggestPhotoCategoriesFlow = ai.defineFlow(
  {
    name: 'suggestPhotoCategoriesFlow',
    inputSchema: SuggestPhotoCategoriesInputSchema,
    outputSchema: SuggestPhotoCategoriesOutputSchema,
  },
  async input => {
    const {output} = await categoriesPrompt(input);
    return output!;
  }
);
