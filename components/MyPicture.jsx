import Image from 'next/image';
import React from 'react'
// import Image from 'next/image'

const MyPicture = () => {
    return (
        <div className='flex justify-center items-center '>

            <img
                className='w-56 md:w-70 lg:w-96 h-auto  rounded-lg shadow-purple-300 shadow-lg'
                src='/img/whiteshirt.png'
                alt='a picture of John Uchendu wearing a white shirt, a smirk and glasses '
            />
        </div>
    );
}

export default MyPicture;