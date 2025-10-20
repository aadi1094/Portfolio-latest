import { useState } from 'react';
import Particles from '@tsparticles/react';
import Typewriter from 'typewriter-effect';
import { Button } from "@material-tailwind/react";
import { motion } from 'framer-motion';

const Home = () => {
  const [activeNav, setActiveNav] = useState("#");

  // Framer Motion variants for animations
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, staggerChildren: 0.2 } },
  };

  const imgVariant = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  const btnVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5} },
  };

  return (
    <section id="home" className="h-[90vh] flex flex-col items-center justify-center p-6 pt-0 md:p-20 xl:items-start font-poppins">
      {/* Particles background */}
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: { value: 100 },
            size: { value: 3 },
            color: { value: '#39ff14' },
            links: {
              enable: true,
              color: '#00f5ff',
              distance: 150,
              opacity: 0.5,
              width: 1,
            },
            move: { enable: true, speed: 2 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-20 lg:gap-24 mt-4 md:mt-0 xl:gap-28">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left flex flex-col items-center md:items-start"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
          whileInView="visible"
           className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#d7d5db]">
            Hi, I&apos;m <br /> <span className="text-red-900">Aditya</span> Chawale
          </motion.h1>
          <motion.p 
          whileInView="visible"
          className="pt-6 text-gray-400 text-sm" variants={textVariant}>
            Expert frontend developer specializing in creating high-quality, responsive <br />
            websites from your designs. Fast, pixel-perfect, and fully functional.
          </motion.p>

          {/* Typewriter Effect */}
          <motion.div
          whileInView="visible"
           className="text-sm sm:text-lg mt-5 text-gray-200" variants={textVariant}>
            <Typewriter
              options={{
                strings: [
                  'A Passionate - <span class="text-red-900">Full-Stack Developer.</span>',
                  'A Passionate - <span class="text-red-900">MERN-Stack Developer.</span>',
                ],
                autoStart: true,
                loop: true,
                delay: 1,
              }}
            />
          </motion.div>

          <div className="flex gap-4 mt-8">
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>
              <motion.div variants={btnVariant} whileInView="visible" initial="hidden">
                <Button className="text-black bg-white rounded-full hover:bg-red-900 hover:text-white">
                  Hire me
                </Button>
              </motion.div>
            </a>
            
            <motion.div variants={btnVariant} whileInView="visible" initial="hidden">
              <Button 
                className="text-white bg-red-900 rounded-full hover:bg-red-800 border border-red-900"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'https://drive.google.com/file/d/1sLdGTulqUAIc_nIc346oPg1DfrK2t9SV/view?usp=sharing';
                  link.download = 'Aditya_Chawale_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >

                
                Resume
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center md:justify-end"
          variants={imgVariant}
          animatio
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="https://i.pinimg.com/originals/72/e9/13/72e913dc12caff1afe76ce070b892fcb.gif"
            className=" w-96 h-auto sm:h-auto sm:w-80 md:h-auto md:w-[45vw] rounded-2xl"
            alt="Design Example"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

//This is made by Aditya Chawale
//Nothing more to say
