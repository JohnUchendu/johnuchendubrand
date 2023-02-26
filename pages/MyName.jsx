import React, { useState, useEffect } from 'react';

const MyName = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);// simulate a 5 secs loading time
}, []);

    return (
        <div>
            {isLoading ? (
                <div className='
                flex justify-center 
                items-center h-32'>
                    <p className='text-gray-400 text-lg animate-pulse'>...</p>
                </div>

            ) : (
                <h1 className="text-xl md:text-2xl lg:text-3xl 
                    font-mono text-center
                     md:py-12 my-4 md:my-8">
                    John | Uchendu
                </h1>
            )}
        </div>
    );
}

export default MyName;