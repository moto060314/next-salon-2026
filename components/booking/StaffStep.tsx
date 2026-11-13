import type { Staff } from '@/types/staff';
import SelectableCard from '@/components/booking/SelectableCard';
import ui from '@/components/UI';

type StaffStepProps = {
  staffs: Staff[];
  selectedStaffId: string | null;
  onSelect: (staffId: string | null) => void;
};

export default function StaffStep({
  staffs,
  selectedStaffId,
  onSelect,
}: StaffStepProps) {
  return (
    <div className='flex flex-col gap-3'>
      <h3 className={ui.title}>STEP 3: スタッフを選ぶ（任意）</h3>
      <SelectableCard
        selected={selectedStaffId === null}
        onClick={() => onSelect(null)}
      >
        指名なし
      </SelectableCard>
      {staffs.map((staff) => (
        <SelectableCard
          key={staff.id}
          selected={selectedStaffId === staff.id}
          onClick={() => onSelect(staff.id)}
        >
          <p className='font-medium'>{staff.name}</p>
          <p className='mt-1 text-sm text-slate-500 group-aria-pressed:text-white/70'>
            {staff.specialty}
          </p>
        </SelectableCard>
      ))}
    </div>
  );
}
