export interface StoryImageOption {
  id: string;
  imageUrl: string;
  altText: string;
  choiceText: string; // Text describing this choice for the summary and AI
  dataAiHint: string; // Hint for Unsplash image search
}

export interface StoryStepContent {
  step: number;
  text: string;
  images: StoryImageOption[];
}

export const TOTAL_STORY_STEPS = 10;

export const storyStepsData: StoryStepContent[] = [
  {
    step: 1,
    text: "The old map you found in your grandfather's attic depicts a forgotten island. Whispers say it holds an ancient secret. As dawn breaks, you stand at the pier. Three vessels offer passage. Which do you choose?",
    images: [
      { id: 'ship_낡은범선', imageUrl: 'https://placehold.co/400x300.png', altText: 'A sturdy, old caravel.', choiceText: 'Boarded the sturdy caravel, seeking a traditional voyage.', dataAiHint: 'old caravel' },
      { id: 'boat_작은모터보트', imageUrl: 'https://placehold.co/400x300.png', altText: 'A nimble, fast motorboat.', choiceText: 'Chose the swift motorboat, valuing speed and agility.', dataAiHint: 'fast motorboat' },
      { id: 'raft_엉성한뗏목', imageUrl: 'https://placehold.co/400x300.png', altText: 'A crudely made raft.', choiceText: 'Opted for the humble raft, trusting in resilience and simplicity.', dataAiHint: 'crude raft' },
    ],
  },
  {
    step: 2,
    text: "After days at sea, a dense fog envelops your vessel. Your compass spins wildly. Three faint lights pierce the gloom. Towards which do you steer?",
    images: [
      { id: 'light_등대', imageUrl: 'https://placehold.co/400x300.png', altText: 'A steady, pulsing beacon from a lighthouse.', choiceText: 'Steered towards the lighthouse beacon, hoping for guidance.', dataAiHint: 'lighthouse beacon' },
      { id: 'light_기이한빛', imageUrl: 'https://placehold.co/400x300.png', altText: 'An eerie, bioluminescent glow from the deep.', choiceText: 'Investigated the eerie bioluminescent glow, drawn by mystery.', dataAiHint: 'bioluminescent glow' },
      { id: 'light_화산섬', imageUrl: 'https://placehold.co/400x300.png', altText: 'A flickering, orange light suggesting a volcanic island.', choiceText: 'Headed for the flickering orange light, anticipating land.', dataAiHint: 'volcanic island' },
    ],
  },
  {
    step: 3,
    text: "You land on a mysterious shore. The air is thick with the scent of unknown blossoms. A narrow path splits into three directions. Which path do you take?",
    images: [
      { id: 'path_정글', imageUrl: 'https://placehold.co/400x300.png', altText: 'A path leading into a dense, dark jungle.', choiceText: 'Ventured into the dense jungle, embracing the unknown.', dataAiHint: 'dense jungle' },
      { id: 'path_산', imageUrl: 'https://placehold.co/400x300.png', altText: 'A steep trail ascending a mist-shrouded mountain.', choiceText: 'Ascended the mist-shrouded mountain, seeking a higher perspective.', dataAiHint: 'misty mountain' },
      { id: 'path_해안', imageUrl: 'https://placehold.co/400x300.png', altText: 'A sandy track following the coastline towards ancient ruins.', choiceText: 'Followed the coastline towards ancient ruins, curious about the past.', dataAiHint: 'coastal ruins' },
    ],
  },
  {
    step: 4,
    text: "Deep within the island, you discover an ancient shrine. An inscription speaks of three sacred artifacts. Which do you seek first?",
    images: [
      { id: 'artifact_수정해골', imageUrl: 'https://placehold.co/400x300.png', altText: 'The Crystal Skull, said to grant visions.', choiceText: 'Sought the Crystal Skull, desiring hidden knowledge.', dataAiHint: 'crystal skull' },
      { id: 'artifact_태양석판', imageUrl: 'https://placehold.co/400x300.png', altText: 'The Sunstone Tablet, rumored to control weather.', choiceText: 'Searched for the Sunstone Tablet, hoping to command elements.', dataAiHint: 'sunstone tablet' },
      { id: 'artifact_생명의샘물병', imageUrl: 'https://placehold.co/400x300.png', altText: 'The Vial of Living Water, believed to heal any ailment.', choiceText: 'Looked for the Vial of Living Water, valuing restoration.', dataAiHint: 'vial water' },
    ],
  },
  {
    step: 5,
    text: "Your quest for the artifact leads you to a chamber guarded by a mythical creature. It offers you a choice: answer a riddle, offer a tribute, or attempt to sneak past. How do you proceed?",
    images: [
      { id: 'guardian_수수께끼', imageUrl: 'https://placehold.co/400x300.png', altText: 'Attempt to answer the guardian\'s riddle.', choiceText: 'Attempted to solve the guardian\'s riddle with wit.', dataAiHint: 'ancient riddle' },
      { id: 'guardian_공물', imageUrl: 'https://placehold.co/400x300.png', altText: 'Offer a valuable item as tribute.', choiceText: 'Offered a precious item as tribute to the guardian.', dataAiHint: 'valuable tribute' },
      { id: 'guardian_잠행', imageUrl: 'https://placehold.co/400x300.png', altText: 'Try to sneak past the guardian.', choiceText: 'Tried to sneak past the guardian using stealth.', dataAiHint: 'stealthy shadow' },
    ],
  },
  {
    step: 6,
    text: "Having acquired the artifact, you notice a shift in the island's atmosphere. A hidden passage is revealed behind a waterfall. It could lead to the island's heart or off the island entirely. What is your next move?",
    images:
      [
        { id: 'passage_섬중심부', imageUrl: 'https://placehold.co/400x300.png', altText: 'Enter the passage to explore the island\'s core.', choiceText: 'Entered the hidden passage to explore the island\'s heart.', dataAiHint: 'hidden passage' },
        { id: 'passage_탈출', imageUrl: 'https://placehold.co/400x300.png', altText: 'Use the passage as a potential escape route.', choiceText: 'Used the passage as an escape route from the island.', dataAiHint: 'escape route' },
        { id: 'passage_조사', imageUrl: 'https://placehold.co/400x300.png', altText: 'Investigate the area around the waterfall further.', choiceText: 'Stayed to investigate the waterfall area more thoroughly.', dataAiHint: 'waterfall investigation' },
      ],
  },
  {
    step: 7,
    text: "The passage leads to a vast underground cavern, illuminated by glowing crystals. In the center lies a pedestal. It seems to react to your artifact. Three distinct symbols are carved on it. Which do you touch?",
    images: [
      { id: 'symbol_용', imageUrl: 'https://placehold.co/400x300.png', altText: 'A symbol representing a dragon.', choiceText: 'Touched the dragon symbol, invoking power.', dataAiHint: 'dragon symbol' },
      { id: 'symbol_별', imageUrl: 'https://placehold.co/400x300.png', altText: 'A symbol representing a celestial star.', choiceText: 'Touched the star symbol, seeking cosmic connection.', dataAiHint: 'celestial star' },
      { id: 'symbol_나무', imageUrl: 'https://placehold.co/400x300.png', altText: 'A symbol representing an ancient tree.', choiceText: 'Touched the ancient tree symbol, valuing nature\'s wisdom.', dataAiHint: 'ancient tree' },
    ],
  },
  {
    step: 8,
    text: "Touching the symbol causes the island to tremble. The secret is awakening! You sense a final trial or a way to harness its power. Three apparitions appear, each offering a different form of wisdom. Whose counsel do you heed?",
    images: [
      { id: 'apparition_전사', imageUrl: 'https://placehold.co/400x300.png', altText: 'A stoic warrior spirit offering tactical advice.', choiceText: 'Listened to the warrior spirit, valuing strength and strategy.', dataAiHint: 'warrior spirit' },
      { id: 'apparition_현자', imageUrl: 'https://placehold.co/400x300.png', altText: 'A wise old sage offering profound insight.', choiceText: 'Heeded the sage\'s profound insight and wisdom.', dataAiHint: 'wise sage' },
      { id: 'apparition_예술가', imageUrl: 'https://placehold.co/400x300.png', altText: 'A creative artist spirit offering an unconventional perspective.', choiceText: 'Embraced the artist spirit\'s unconventional perspective.', dataAiHint: 'artist spirit' },
    ],
  },
  {
    step: 9,
    text: "Following the apparition's guidance, you arrive at the island's core: a pulsating Heart Crystal. It offers three choices for its power: to restore balance to the world, to gain immense personal power, or to safeguard the island's magic. What do you choose?",
    images: [
      { id: 'crystal_균형회복', imageUrl: 'https://placehold.co/400x300.png', altText: 'Use the crystal to restore balance to the world.', choiceText: 'Chose to restore balance to the world with the crystal\'s power.', dataAiHint: 'world balance' },
      { id: 'crystal_개인적힘', imageUrl: 'https://placehold.co/400x300.png', altText: 'Claim the crystal\'s power for yourself.', choiceText: 'Claimed immense personal power from the crystal.', dataAiHint: 'personal power' },
      { id: 'crystal_마법보호', imageUrl: 'https://placehold.co/400x300.png', altText: 'Become the guardian of the island\'s magic.', choiceText: 'Decided to safeguard the island\'s magic as its new guardian.', dataAiHint: 'magic guardian' },
    ],
  },
  {
    step: 10,
    text: "Your decision shapes the fate of the island and perhaps the world. As the crystal's energy surges through you, you must choose your final action. How will you depart or remain?",
    images: [
      { id: 'final_귀환', imageUrl: 'https://placehold.co/400x300.png', altText: 'Return to your own world, carrying the experience.', choiceText: 'Returned to your own world, forever changed by the island.', dataAiHint: 'return home' },
      { id: 'final_탐험', imageUrl: 'https://placehold.co/400x300.png', altText: 'Set out to explore other hidden wonders of the world.', choiceText: 'Set out to explore more hidden wonders, an adventurer reborn.', dataAiHint: 'new exploration' },
      { id: 'final_수호자', imageUrl: 'https://placehold.co/400x300.png', altText: 'Remain on the island as its dedicated protector.', choiceText: 'Remained on the island, its dedicated protector and guardian.', dataAiHint: 'island protector' },
    ],
  },
];
