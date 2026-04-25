import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Assuming prisma client is exported from lib/prisma

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    const products = await prisma.product.findMany({
      where: {
        isReserved: false,
        ...(category && { category }),
      },
      include: {
        store: {
          select: {
            name: true,
            address: true,
            latitude: true,
            longitude: true,
          }
        }
      },
      take: 20,
    });

    return NextResponse.json({
      success: true,
      count: products.length,
      data: products,
      _metadata: {
        api_version: "v1.0",
        documentation_url: "https://docs.localsave.com/api",
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
