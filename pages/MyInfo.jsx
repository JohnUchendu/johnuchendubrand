import React, { useEffect, useState } from 'react'
import SubHeading from '../components/SubHeadings';

const MyInfo = () => {
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 7000); // simulate a 10 secs loading time
    }, []);



    return (
        <div>
            <SubHeading header='ABOUT' /><hr />
            {isloading ? (
                <div className='flex justify-center items-center h-32'>
                    <p className='text-gray-400 text-lg animate-pulse'>...</p>
                </div>
            ) : (
                <p className="text-[8px] sm:text-xs md:text-2xl lg:text-sm font-mono text-center
                md:pb-12  ">Born in {"'97"} in Nigeria, a country filled with vibrant culture and
                    rich traditions. As a young child, I attended Cecilia Learning Academy briefly then Montessori International School, where I began
                    my journey of growth and self-discovery. <br /><br />
                    From the moment I stepped foot into Preston International School, I knew that I was in for an adventure.
                    The school was filled with lively children and passionate teachers who inspired me to be curious and adventurous.<br /><br />
                    As a boarding student, I had the opportunity to form deep friendships with other students from all around the world.
                    We laughed, learned, loved by all and grew together, and I cherish those memories to this day.<br /><br />One of the fondest memories from my time
                    at Preston International School was at the {"school's"} termly parties and annual talent show.
                    I was always adventurous and loved performing, so I decided to take the stage  and perform a dance routine that we had been
                    practicing for weeks. With the encouragement of my teachers and classmates, I danced my heart out and felt the thrill of the {"audience's"}
                    applause. That experience cemented my adventurous spirit and taught me the value of taking risks, stepping outside my comfort zone,
                    and finding creative solutions to problems.<br /><br />During my time at Preston International School, I was also an active participant in the
                    {"school's"} Jet Club. Being a part of the Jet Club provided me with the opportunity to explore my love of computers and learn various technologies.
                    I was always excited to attend meetings and events, where I could share my passion for technology with like minded students and work on projects
                    together.


                </p >
            )}
        </div>
    );
}

export default MyInfo