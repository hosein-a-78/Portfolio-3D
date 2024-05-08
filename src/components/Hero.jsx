// import { mation } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas/Computers'

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div className={`${styles.paddingX} absolute inset-0 top-[120x] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi , I'
                        <span className='text-[#915eff]'>Hosein</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Ideveloper 3D visuals, user
                        <br className='sm:block hidden' />
                        interfaces and web applications
                    </p>
                </div>
            </div>
            <ComputersCanvas />
        </section>
    );
};

export default Hero;