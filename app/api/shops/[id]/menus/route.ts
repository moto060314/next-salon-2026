import { MOCK_SHOP_MENUS } from '@/data/MockData';
import { NextResponse } from 'next/server';

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const menus = MOCK_SHOP_MENUS[id] ?? [];

  return NextResponse.json({ menus });
}
