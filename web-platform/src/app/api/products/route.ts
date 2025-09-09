import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: "1",
      name: "Handwoven Bamboo Basket",
      price: 1200,
      artisan: "Sita Munda",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=640&auto=format&fit=crop",
    },
    {
      id: "2",
      name: "Dokra Metal Art",
      price: 4500,
      artisan: "Karu Ho",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=640&auto=format&fit=crop",
    },
  ];
  return NextResponse.json(data);
}


