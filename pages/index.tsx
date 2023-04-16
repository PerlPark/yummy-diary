import DailyItem from '@/components/DailyItem';
import useGetLocalData from '@/hooks/useGetLocalData';
import dayjs from 'dayjs';
import { Pacifico } from 'next/font/google';
import 'dayjs/locale/ko';
dayjs.locale('ko');

const pacifico = Pacifico({ weight: ['400'], subsets: ['latin'] });

export default function Home() {
  const data = useGetLocalData();

  const today = dayjs().format('YYYY/MM/DD (ddd)');
  const hasToday = data[0]?.date === today;

  return (
    <main className="p-10">
      <h1 className={`${pacifico.className} text-red-400 mb-10`}>
        Yummy Diary
      </h1>
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl font-semibold">먹었어요</h2>
        {!hasToday && <DailyItem date={today} isToday={true} />}
      </div>
    </main>
  );
}
