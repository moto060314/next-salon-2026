import { notFound } from 'next/navigation';
import ShopHero from '@/components/ShopHero';
import ShopMenuList from '@/components/ShopMenuList';
import ShopStaffList from '@/components/ShopStaffList';
import { getMenus, getShop, getStaff } from '@/lib/services/shops';

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

  const [menus, staff] = await Promise.all([getMenus(id), getStaff(id)]);

  return (
    <div>
      <ShopHero shop={shop} />
      <div className='grid gap-8 lg:grid-cols-2'>
        <section>
          <h2 className='mb-4 text-2xl font-semibold text-slate-950'>
            メニュー
          </h2>
          <ShopMenuList menus={menus} />
        </section>
        <section>
          <h2 className='mb-4 text-2xl font-semibold text-slate-950'>
            スタッフ
          </h2>
          <ShopStaffList staff={staff} />
        </section>
      </div>
    </div>
  );
}
