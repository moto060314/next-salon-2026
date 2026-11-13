import { notFound } from 'next/navigation';
import BookingForm from '@/components/booking/BookingForm';
import SectionHeading from '@/components/SectionHeading';
import { getMenus, getShop, getStaff } from '@/lib/services/shops';

// 予約可能な時間帯（モック。営業時間データができたら店舗ごとに差し替える）
const TIME_SLOTS = [
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
];

// 今日から数えて予約可能な日数
const BOOKING_DAYS = 14;

// 明日から BOOKING_DAYS 日分の日付（YYYY-MM-DD）
function getCandidateDates(): string[] {
  return Array.from({ length: BOOKING_DAYS }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${month}-${day}`;
  });
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function BookingPage({ params }: Props) {
  const { id } = await params;

  const shop = await getShop(id);
  if (!shop) {
    notFound();
  }

  const [menus, staffs] = await Promise.all([getMenus(id), getStaff(id)]);

  return (
    <div>
      <SectionHeading
        eyebrow='Booking'
        title={`${shop.name} の予約`}
        description='メニュー・スタッフ・日時を選んで予約します。'
      />
      <div className='mt-8'>
        <BookingForm
          shop={shop}
          menus={menus}
          staffs={staffs}
          candidateDates={getCandidateDates()}
          timeSlots={TIME_SLOTS}
        />
      </div>
    </div>
  );
}
