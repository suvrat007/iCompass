import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    { slug: "betla-national-park", name: "Betla National Park", rating: 4.8 },
    { slug: "hundru-falls", name: "Hundru Falls", rating: 4.6 },
    { slug: "jonha-falls", name: "Jonha Falls", rating: 4.5 },
  ];
  return NextResponse.json(data);
}


