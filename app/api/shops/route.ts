import { MOCK_SHOPS } from '@/data/MockData';
import { NextResponse } from 'next/server';

export async function GET() {
  const shops = MOCK_SHOPS;
  // JSON でレスポンス
  return NextResponse.json({ shops });
}
