import { notFound } from 'next/navigation';
import ShopHero from '@/components/ShopHero';
import { getShop } from '@/lib/services/shops';

export default async function ShopDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const shop = await getShop(id);

  if (!shop) {
    notFound();
  }

  return <ShopHero shop={shop} />;
}
