// import { supabase } from "@/lib/supabase";
// import {NextResponse} from "next/server";
// import {createClient} from "@/utils/supabase/server";
// import {getUserData} from "@/services/user";
// import {getRoomsForCompany} from "@/services/room";

import {NextResponse} from "next/server";

export async function GET(request: Request) {
  const images = [
    {
      promptId: 1,
      text: "prompt",
      images: [
        {
          id: 1,
          imageUrl: "/images/1000028452.jpg"
        },
        {
          id: 2,
          imageUrl: "/images/1000028453.jpg"
        },
        {
          id: 3,
          imageUrl: "/images/1000028463.jpg"
        }].sort(() => Math.random() - 0.5)
    }
  ]
  const aiModelElement = {
    promptId: 66,
    text: "Which is your favourite AI generator",
    images: [
      {
        id: 55,
        imageUrl: "/images/gemini.jpg"
      },
      {
        id: 56,
        imageUrl: "/images/grok.jpg"
      },
      {
        id: 67,
        imageUrl: "/images/openai.jpg"
      }].sort(() => Math.random() - 0.5)
  }

  for (let i = 0; i < 8; i++) {
    images.push({
      ...images[0],
      images: [...images[0].images].sort(() => Math.random() - 0.5),
      text: `prompt ${i + 2}`,
      promptId: i + 2,
    })
  }
  const splitElementIndex = Math.floor(Math.random() * 6)
  const finalImages = [...images.slice(0, splitElementIndex), aiModelElement, ...images.slice(splitElementIndex)];
  return NextResponse.json({images: finalImages});
}

export async function POST(request: Request) {
  const results = {
    GEMINI: 4,
    GROK: 3,
    OPENAI: 3
  }
  return NextResponse.json({results});
}

