import Head from 'next/head';
import Layout from '../components/layout/layout';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { NotificationContextProvider } from '@/store/notification-context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name='description' content='NextJS Events' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
