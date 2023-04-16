import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MainPage from '../components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Мойка грузовых авто в Верхней Пышме | Чистота и качество - наша главная задача</title>
        <meta name="description" content="Мы предоставляем услуги мойки грузовых автомобилей в Верхней Пышме. В нашей мойке Вы можете рассчитывать на качественное обслуживание и полную чистоту Вашего авто." />
        <meta name="keywords" content="мойка грузовых авто, мойка грузовиков, мойка тяжелых авто, Верхняя Пышма" />
        <link rel="icon" href="/wash.ico" />
      </Head>
      <MainPage />
    </>
  )
}
