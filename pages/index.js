
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import LoadingScreen from '../components/Loader/LoadingScreen';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.welcomeMessage = "Welcome to CodingDeft!"
    }
    router.push('./dashboard')
  }, [])

  return (
    typeof window !== 'undefined' ?
    <LoadingScreen /> : null
  )
}
