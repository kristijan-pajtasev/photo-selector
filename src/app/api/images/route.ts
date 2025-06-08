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
          imageUrl: "/images/1000028452.jpg"
        },
        {
          id: 3,
          imageUrl: "/images/1000028452.jpg"
        }]
    }
  ]
  for(let i = 0; i < 9; i ++) {
    images.push({
      ...images[0],
      text: `prompt ${i+2}`,
      promptId: i + 2,
    })
  }
  return NextResponse.json({images});
}

export async function POST(request: Request) {
  const results = {
    GEMINI: 4,
    GROK: 3,
    OPENAI: 3
  }
  return NextResponse.json({results});
}

