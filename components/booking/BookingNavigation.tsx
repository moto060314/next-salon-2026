import { TOTAL_STEPS } from '@/contexts/BookingContext';
import ui from '@/components/UI';

type BookingNavigationProps = {
  step: number;
  canGoNext: boolean;
  onPrev: () => void;
  onNext: () => void;
};

export default function BookingNavigation({
  step,
  canGoNext,
  onPrev,
  onNext,
}: BookingNavigationProps) {
  return (
    <div className='my-4 flex justify-center gap-3'>
      <button
        type='button'
        onClick={onPrev}
        disabled={step === 1}
        className={ui.button}
      >
        戻る
      </button>
      {step < TOTAL_STEPS ? (
        <button
          type='button'
          onClick={onNext}
          disabled={!canGoNext}
          className={ui.secondaryButton}
        >
          次へ
        </button>
      ) : (
        <button type='button' className={ui.primaryButton}>
          この内容で予約する
        </button>
      )}
    </div>
  );
}
