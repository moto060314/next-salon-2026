import Image from 'next/image';
import type { Staff } from '@/types/staff';

export default function ShopStaffList({ staff }: { staff: Staff[] }) {
  if (staff.length === 0) {
    return <p className='text-sm text-slate-500'>スタッフ情報は準備中です。</p>;
  }

  return (
    <div className='flex flex-col gap-4'>
      {staff.map((member) => (
        <div
          key={member.id}
          className='flex items-start gap-4 rounded-2xl border border-slate-200 p-5'
        >
          <div className='relative h-16 w-16 shrink-0 overflow-hidden rounded-full'>
            <Image
              src={member.imageUrl}
              alt={member.name}
              fill
              className='object-cover'
            />
          </div>
          <div>
            <p className='font-medium text-slate-950'>{member.name}</p>
            <p className='mt-1 text-sm text-rose-600'>{member.specialty}</p>
            <p className='mt-1 text-sm leading-6 text-slate-600'>
              {member.bio}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
