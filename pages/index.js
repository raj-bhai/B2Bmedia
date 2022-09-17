
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import LoadingScreen from '../components/Loader/LoadingScreen';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
     router.push('./dashboard')
  }, [])

  return (
    <LoadingScreen />
  )
}
