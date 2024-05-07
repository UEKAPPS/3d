/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';


import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:min-w-[240px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full black-black-gradient p-[1px] rounded-[20px] 
        shadow-card md:shadow-indigo-500/50'
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
            className='w-full h-full object-contain' />
          <h3 className='text-white font-bold text-center text-[20px]'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>
          Introduction
        </p>
        <h2 className={styles.heroHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[18px] max-w-5xl leading-[30px]'>
        I have extensive experience in software development, information technology and cyber security.

        This broad skill set makes me a well-rounded professional and equips me for any challenge in the 
        technology field. Dedicated to continuous improvement and learning new skills, I keep up to date 
        with the latest trends in the world of technology. This makes me an ideal candidate for both current and future projects.
      </motion.p>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")