import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MyName from './MyName'
import MyPicture from './MyPicture'
import MyProject from './MyProject'
import MyInfo from './MyInfo'
import Footer from '../components/Footer'


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 9000);// simulate a 9 secs loading time
  }, []);

  return (
    <div className=''>
      {isLoading ? (
        <div className='flex justify-center items-center h-32 h-screen'>
          <p className='text-3xl sm:text-5xl md:text-3xl lg:text-5xl animate-pulse'>J | U</p>

        </div>
      ) : (

        <div className={styles.container}>
          <Head>
            <title>J | U - john uchendu</title>
            <meta name="description" content="Designed by John Uchendu" />
            <link rel="icon" href="/img/6E971DC5-90D1-41A3-AF05-D7C4A3103FDA-removebg-preview.png" />
          </Head>
          <MyName />
          <MyPicture />
          <MyProject />
          <MyInfo />
          <Footer />
          <main className=''>
            <h1 className=''></h1>
          </main>

          <footer className={styles.footer}>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >


            </a>
          </footer>
        </div>
      )}
    </div>
  );
}
