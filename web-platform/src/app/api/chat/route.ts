import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  const reply = `Birsa: I hear you said: "${message}". Here's a cultural tip: Always greet with a warm smile in local villages.`;
  return NextResponse.json({ reply });
}


