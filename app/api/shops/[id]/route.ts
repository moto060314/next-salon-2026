import { MOCK_SHOPS } from '@/data/MockData';
import { NextResponse } from 'next/server';

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const shop = MOCK_SHOPS.find((item) => item.id === id);

  if (!shop) {
    return NextResponse.json({ error: 'not found' }, { status: 404 });
  }

  return NextResponse.json({ shop });
}
