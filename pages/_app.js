import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../redux/store';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Analytics />
    </Provider>
  )
}

export default MyApp
