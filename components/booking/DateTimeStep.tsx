import SelectableCard from '@/components/booking/SelectableCard';
import ui from '@/components/UI';

type DateTimeStepProps = {
  candidateDates: string[];
  timeSlots: string[];
  selectedDate: string | null;
  selectedTime: string | null;
  onSelectDate: (date: string) => void;
  onSelectTime: (time: string) => void;
};

export default function DateTimeStep({
  candidateDates,
  timeSlots,
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
}: DateTimeStepProps) {
  return (
    <div className='flex flex-col gap-6'>
      <div>
        <h3 className={ui.title}>STEP 2: 日付を選ぶ</h3>
        <div className='mt-3 flex flex-wrap gap-2'>
          {candidateDates.map((date) => (
            <SelectableCard
              key={date}
              rounded='full'
              selected={selectedDate === date}
              onClick={() => onSelectDate(date)}
            >
              {date}
            </SelectableCard>
          ))}
        </div>
      </div>
      <div>
        <h3 className={ui.title}>時間を選ぶ</h3>
        <div className='mt-3 flex flex-wrap gap-2'>
          {timeSlots.map((time) => (
            <SelectableCard
              key={time}
              rounded='full'
              selected={selectedTime === time}
              onClick={() => onSelectTime(time)}
            >
              {time}
            </SelectableCard>
          ))}
        </div>
      </div>
    </div>
  );
}
