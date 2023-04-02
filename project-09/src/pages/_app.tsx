import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import MainNavigation from '@/components/layout/main-navigation';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Next Blog</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <MainNavigation />
      <Component {...pageProps} />;
    </Fragment>
  );
}
