import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import { Pacifico } from 'next/font/google';

import DailyItem from '@/components/DailyItem';
import { DATE_FORMAT } from '@/constants/date';
import useLocalData from '@/hooks/useLocalData';

dayjs.locale('ko');
dayjs.extend(isSameOrAfter);

const pacifico = Pacifico({ weight: ['400'], subsets: ['latin'] });

export default function Home() {
    const data = useLocalData();
    const [init, setInit] = useState(false);

    const today = dayjs().format(DATE_FORMAT);
    const hasToday = data[0] && dayjs(data[0]?.date).isSameOrAfter(today);

    useEffect(() => {
        setInit(true);
    }, []);

    return (
        <main className="py-9 px-10 w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl">
            <h1 className={`${pacifico.className} text-rose-400 text-right text-xl sticky top-4`}>
                ❋&nbsp;&nbsp;Yummy Diary&nbsp;&nbsp;❋
            </h1>
            <div className="flex flex-col gap-8">
                {init && !hasToday && <DailyItem date={today} isToday />}
                {data.map((item) => (
                    <DailyItem key={item.date} {...item} isToday={item.date === today} />
                ))}
            </div>
        </main>
    );
}
