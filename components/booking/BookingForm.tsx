'use client';

import BookingNavigation from '@/components/booking/BookingNavigation';
import BookingSummary from '@/components/booking/BookingSummary';
import ConfirmStep from '@/components/booking/ConfirmStep';
import DateTimeStep from '@/components/booking/DateTimeStep';
import MenuStep from '@/components/booking/MenuStep';
import StaffStep from '@/components/booking/StaffStep';
import {
  BookingProvider,
  canGoNext,
  useBooking,
} from '@/contexts/BookingContext';
import type { Menu } from '@/types/menu';
import type { Shop } from '@/types/shop';
import type { Staff } from '@/types/staff';

type BookingFormProps = {
  shop: Shop;
  menus: Menu[];
  staffs: Staff[];
  candidateDates: string[];
  timeSlots: string[];
};

export default function BookingForm({
  shop,
  menus,
  staffs,
  candidateDates,
  timeSlots,
}: BookingFormProps) {
  return (
    <BookingProvider shopId={shop.id}>
      <BookingFlow
        menus={menus}
        staffs={staffs}
        candidateDates={candidateDates}
        timeSlots={timeSlots}
      />
    </BookingProvider>
  );
}

type BookingFlowProps = Omit<BookingFormProps, 'shop'>;

function BookingFlow({
  menus,
  staffs,
  candidateDates,
  timeSlots,
}: BookingFlowProps) {
  const { state, dispatch } = useBooking();

  const selectedMenu = menus.find((menu) => menu.id === state.menuId);
  const selectedStaff = staffs.find((staff) => staff.id === state.staffId);

  return (
    <div className='grid gap-8 md:grid-cols-[1fr_320px]'>
      <div>
        {state.step === 1 && (
          <MenuStep
            menus={menus}
            selectedMenuId={state.menuId}
            onSelect={(menuId) => dispatch({ type: 'select-menu', menuId })}
          />
        )}
        {state.step === 2 && (
          <DateTimeStep
            candidateDates={candidateDates}
            timeSlots={timeSlots}
            selectedDate={state.date}
            selectedTime={state.time}
            onSelectDate={(date) => dispatch({ type: 'select-date', date })}
            onSelectTime={(time) => dispatch({ type: 'select-time', time })}
          />
        )}
        {state.step === 3 && (
          <StaffStep
            staffs={staffs}
            selectedStaffId={state.staffId}
            onSelect={(staffId) => dispatch({ type: 'select-staff', staffId })}
          />
        )}
        {state.step === 4 && (
          <ConfirmStep
            notes={state.notes}
            onChangeNotes={(notes) => dispatch({ type: 'change-notes', notes })}
          />
        )}

        <BookingNavigation
          step={state.step}
          canGoNext={canGoNext(state)}
          onPrev={() => dispatch({ type: 'prev' })}
          onNext={() => dispatch({ type: 'next' })}
        />
      </div>

      <BookingSummary
        selectedMenu={selectedMenu}
        selectedStaff={selectedStaff}
        staffId={state.staffId}
        date={state.date}
        time={state.time}
      />
    </div>
  );
}
