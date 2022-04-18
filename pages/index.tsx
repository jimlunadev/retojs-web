import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Retojs</title>
        <meta name="description" content="Aplicación de retos JavaScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          reto <span className={styles.icon}></span>
        </h1>
      </main>
    </div>
  )
}

export default Home
