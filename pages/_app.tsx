import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import '@/styles/globals.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="user-scalable=no" />
            </Head>

            <RecoilRoot>
                <div className="py-24 px-5">
                    <Component {...pageProps} />
                </div>
            </RecoilRoot>
        </>
    );
}
