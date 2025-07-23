import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative max-w-7xl mx-auto flex items-center justify-center py-10 px-2 sm:px-4 md:px-8">
      <div className="relative w-full rounded-2xl sm:rounded-3xl md:rounded-[40px] h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/src/assets/images/about-D07q2VMO.webp')", filter: 'brightness(0.6)' }}>
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0  z-0" />

        {/* Centered Content */}
        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center h-full px-2 sm:px-4 text-center text-white"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.5 }}
        >
       
        </motion.div>
        <motion.div
            className="relative bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-xl md:text-2xl font-semibold"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.5 }}
        >
          
        </motion.div>

       
      </div>
 {/* Blue Box Animation */}
 <div className='absolute flex flex-col justify-center items-center bottom-[100px] '>

 
 <motion.div
          className="absolute transform  -translate-x-1/2 bg-gradient-to-br from-[#1437f6]  to-[#030487]  w-[95vw] max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl h-48 sm:h-56 md:h-64 lg:h-72 bg-[#03045e] rounded-[50px] shadow-lg z-20 flex flex-col items-center justify-center text-center px-3 sm:px-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.h1
    className="text-lg sm:text-2xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg"
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
    viewport={{ once: false, amount: 0.5 }}
  >
    About Us
  </motion.h1>
  <motion.p
    className="mt-2 sm:mt-4 text-xs sm:text-base md:text-lg max-w-[90vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-white"
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.7, ease: 'easeOut', delay: 1 }}
    viewport={{ once: false, amount: 0.5 }}
  >
    Empowering Businesses with Seamless Payments. <br />
    <span className="text-white font-medium">
      SriPay simplifies digital transactions by providing secure, fast, and efficient payment solutions for merchants worldwide.
    </span>
  </motion.p>
          </motion.div>
          </div>
    </div>
  );
};

export default Hero;
