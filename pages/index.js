import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MyName from '../components/MyName'
import MyPicture from '../components/MyPicture'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);// simulate a 5 secs loading time
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className='flex justify-center items-center h-32 h-screen'>
          <p className='text-gray-500 text-lg'>J | U</p>

        </div>
      ) : (

        <div className={styles.container}>
          <Head>
            <title>J | U</title>
            <meta name="description" content="Designed by John Uchendu" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <MyName />
          <MyPicture />
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
