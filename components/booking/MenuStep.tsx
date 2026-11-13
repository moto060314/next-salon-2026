import type { Menu } from '@/types/menu';
import SelectableCard from '@/components/booking/SelectableCard';
import ui from '@/components/UI';

type MenuStepProps = {
  menus: Menu[];
  selectedMenuId: string | null;
  onSelect: (menuId: string) => void;
};

export default function MenuStep({
  menus,
  selectedMenuId,
  onSelect,
}: MenuStepProps) {
  return (
    <div className='flex flex-col gap-3'>
      <h3 className={ui.title}>STEP 1: メニューを選ぶ</h3>
      {menus.map((menu) => (
        <SelectableCard
          key={menu.id}
          selected={selectedMenuId === menu.id}
          onClick={() => onSelect(menu.id)}
        >
          <p className='font-medium'>{menu.name}</p>
          <p className='mt-1 text-sm text-slate-500 group-aria-pressed:text-white/70'>
            ¥{menu.price.toLocaleString('ja-JP')} / {menu.durationMinutes}min
          </p>
        </SelectableCard>
      ))}
    </div>
  );
}
