import React from 'react'
import Image from 'next/image'

const MyPicture = () => {
    return (
        <div className='flex justify-center items-center'>
            <Image
                className='w-48 h-48  shadow-lg'
                src=''
                alt='A handsome picture of John Uchendu'
                
            />
        </div>
    );
}

export default MyPicture;