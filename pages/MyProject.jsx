import React from 'react';
import Link from 'next/link';
import SubHeadings from '../components/SubHeadings';

const MyProject = () => {
  return (
    <div>
      <SubHeadings header='Projects' />
      <Link href='https://advice4me.netlify.app' target="_blank" rel='noopener noreferrer'>
        <code className='bg-slate-100 text-blue-800 underline'>Give me Advice</code>

      </Link>
    </div>
  )
}

export default MyProject