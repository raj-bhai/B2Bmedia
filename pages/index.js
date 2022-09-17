import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Mypage from '../components/mypage'
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function Home() {
  return (
    // <Provider store={store} >
    <Mypage></Mypage>
    // </Provider>
  )
}
