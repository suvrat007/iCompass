import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    visitors: 18342,
    countries: 27,
    storiesPreserved: 512,
    communityImpact: 128740,
  });
}


