import ui from '@/components/UI';

type Props = {
  notes: string;
  onChangeNotes: (notes: string) => void;
};

export default function ConfirmStep({ notes, onChangeNotes }: Props) {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className={ui.title}>STEP 4: 確認して予約する</h3>
      <label className='flex flex-col gap-1 text-sm'>
        備考（任意）
        <textarea
          className='rounded-lg border border-slate-300 px-3 py-2'
          rows={3}
          maxLength={500}
          value={notes}
          onChange={(e) => onChangeNotes(e.target.value)}
        />
      </label>
    </div>
  );
}
