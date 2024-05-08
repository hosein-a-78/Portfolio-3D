import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className='xs:w-[250px] w-full'>
            <motion.dev
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
                     flex justify-evenly items-center flex-col'>
                    <img src={icon} alt={title}
                        className='w-16 h-16 object-contain' />
                    <h3 className='text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </motion.dev>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.dev variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.dev>
            <motion.p variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                I'm a skilled software developer
                with experience in typescript
                and javascript, and expertice in framworks
                like reacts , node.js , and
                three.js, i'm a quick learner and
                collaborate closely with clients to
                create efficient, sclable , and
                user-frindly solutions that solve
                real-words problems lets work toghter
                to bing your ideas to life!
                to bing your ideas to life!
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default About;