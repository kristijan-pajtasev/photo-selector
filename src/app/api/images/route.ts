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
      text: "hello world 1",
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
  return NextResponse.json({images})
  // const userDataResponse = await getUserData()
  // const userData = userDataResponse && userDataResponse.length > 0 ? userDataResponse[0] : null;
  // if (!userData) return NextResponse.error()
  // const companyId = userData.company[0].id
  //
  // const roomsForCompany = await getRoomsForCompany(companyId)
  // console.log("roomsForCompany: ", roomsForCompany);
  // return NextResponse.json({
  //   rooms: roomsForCompany
  // })
}

