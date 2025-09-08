import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: "1",
      name: "Handwoven Bamboo Basket",
      price: 1200,
      artisan: "Sita Munda",
      image: "/images/basket.jpg",
    },
    {
      id: "2",
      name: "Dokra Metal Art",
      price: 4500,
      artisan: "Karu Ho",
      image: "/images/dokra.jpg",
    },
  ];
  return NextResponse.json(data);
}


