import DailyItem from '@/components/DailyItem';
import dayjs from 'dayjs';
import { Pacifico } from 'next/font/google';
import 'dayjs/locale/ko';
import useLocalData from '@/hooks/useLocalData';
dayjs.locale('ko');

const pacifico = Pacifico({ weight: ['400'], subsets: ['latin'] });

export default function Home() {
  const data = useLocalData();

  const today = dayjs().format('YYYY/MM/DD (ddd)');
  const hasToday = data[0]?.date === today;

  return (
    <main className="py-9 px-10 w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl">
      <h1 className={`${pacifico.className} text-rose-400 text-right text-xl`}>
        ❋&nbsp;&nbsp;Yummy Diary&nbsp;&nbsp;❋
      </h1>
      <div className="flex flex-col gap-8">
        {!hasToday && <DailyItem date={today} isToday={true} />}
        {data.map((item) => (
          <DailyItem
            key={item.date}
            date={today}
            morning={item.morning}
            isToday={item.date === today}
          />
        ))}
      </div>
    </main>
  );
}
