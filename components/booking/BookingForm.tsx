'use client';

import {
  BookingProvider,
  canGoNext,
  TOTAL_STEPS,
  useBooking,
} from '@/contexts/BookingContext';
import type { Menu } from '@/types/menu';
import type { Shop } from '@/types/shop';
import type { Staff } from '@/types/staff';

type BookingFormProps = {
  shop: Shop;
  menus: Menu[];
  staffs: Staff[];
};

export default function BookingForm({ shop }: BookingFormProps) {
  return (
    <BookingProvider shopId={shop.id}>
      <BookingFlow />
    </BookingProvider>
  );
}

function BookingFlow() {
  const { state, dispatch } = useBooking();

  return (
    <div>
      {state.step === 1 && <div>STEP 1: メニューを選ぶ</div>}
      {state.step === 2 && <div>STEP 2: 日付・時間を選ぶ</div>}
      {state.step === 3 && <div>STEP 3: スタッフを選ぶ（任意）</div>}
      {state.step === 4 && <div>STEP 4: 確認して予約する</div>}

      <div className='my-4 flex justify-center gap-3'>
        <button
          type='button'
          onClick={() => dispatch({ type: 'prev' })}
          disabled={state.step === 1}
          className='rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium disabled:opacity-40'
        >
          戻る
        </button>
        {state.step < TOTAL_STEPS ? (
          <button
            type='button'
            onClick={() => dispatch({ type: 'next' })}
            disabled={!canGoNext(state)}
            className='rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium disabled:opacity-40'
          >
            次へ
          </button>
        ) : (
          <button
            type='button'
            className='rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium disabled:opacity-40'
          >
            この内容で予約する
          </button>
        )}
      </div>
    </div>
  );
}
