type SelectableCardProps = {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  rounded?: '2xl' | 'full';
  className?: string;
};

// 選択中（aria-pressed="true"）のときだけ上書きするクラス
const PRESSED =
  'aria-pressed:border-slate-950 aria-pressed:bg-slate-950 aria-pressed:text-white';

export default function SelectableCard({
  selected,
  onClick,
  children,
  rounded = '2xl',
  className = '',
}: SelectableCardProps) {
  const shape =
    rounded === 'full' ? 'rounded-full px-4 py-2 text-sm' : 'rounded-2xl p-5';

  return (
    <button
      type='button'
      onClick={onClick}
      aria-pressed={selected}
      className={`group border text-left transition border-slate-200 hover:border-slate-400 ${PRESSED} ${shape} ${className}`}
    >
      {children}
    </button>
  );
}
