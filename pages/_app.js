import '../styles/globals.css'
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../redux/store';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GroGrip - Grow Your Business</title>
        <meta name="description" content="One place for your all SEO, SMO, CONTENT" />
        <meta property="og:title" content="Beyobo - Beyond Boundaries " />
        <meta property="og:description" content="Beyond boundaries Commerce is an Online Marketplace" />
        <meta property="og:url" content="https://beyobo.com" />
        <meta property="og:image" content="/beyobofavicon.png" />
        <meta name="og_site_name" property="og:site_name" content="beyobo.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.beyobo.com" />
        <link rel="alternate" href="android-app://in.zaadu.twa"></link>
        <link rel="icon" href="/beyobofavicon.png" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
        <Analytics />
      </Provider>
    </>
  )
}

export default MyApp
