import React from 'react';
import Link from 'next/link';
import SubHeading from '../components/SubHeadings';
import Head from 'next/head';


<Head>

</Head>
const MyProject = () => {
  return (
    <div>
      <SubHeading header='PROJECTS' />
      <Link href='https://advice4me.netlify.app' target="_blank" rel='noopener noreferrer'>
        <ol>
          <li className='text-blue-500 text-[8px] sm:text-xs md:text-2xl lg:text-sm'><hr />Give me Advice</li>
        </ol>
      </Link>
    </div >
  )
}

export default MyProject