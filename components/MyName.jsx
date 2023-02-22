import React, { useState, useEffect } from 'react';

const MyName = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);// simulate a 10 sec loading time
}, []);

    return (
        <div>
            {isLoading ? (
                <div className='
                flex justify-center 
                items-center h-32'>
                    <p className='text-gray-400 text-lg'>.</p>
                </div>

            ) : (
                <h1 className="
                    text-3xl md:text-5xl 
                    font-mono text-center
                     py-8 md:py-12 my-4 md:my-8">
                    John | Uchendu
                </h1>
            )}
        </div>
    );
}

export default MyName;