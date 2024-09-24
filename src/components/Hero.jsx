import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className="w-5 h-80 flex flex-col items-center pointer-events-none relative">
          {/* Circle at the top */}
          <div className="rounded-full bg-white border-2 border-gray-300 w-4 h-4 mb-2"></div>

          {/* Gradient line */}
          <div className="flex-grow w-1 bg-gradient-to-b from-green-500 via-[#7C72FF] to-transparent rounded-full"></div>
          </div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-green-500'>Amit</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces<br className='sm:block hidden' />
            and Web Applications
          </p> 
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

      {/* <div className="w-5 h-10 flex flex-col-1 pointer-events-none position-relative">
        <div className="mx-auto">
          <div className="inline-block rounded-full p-1" style={{border: "2px solid rgba(255,255,255,0.3);"}}></div>
        </div>
        hello
        <div
        style={{background: "linear-gradient(transparent, #7C72FF 30%);", height: "60%"}}
        className="home-campaign-git-line lg:w-[5px] rounded mx-auto"
        >
        </div>

        <div className="mx-auto my-3 home-campaign-glowing-icon " style={{transform: "translateZ(0)"}}>
          <div className="position-relative inline-block z-1">
            <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-code" style={{display: "inline-block", overflow: "visible !important;", 
              verticalAlign: "text-bottom;", fill: "currentColor;"}}>
              <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
            </svg>

            <span className="position-absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow circle z-1" 
            style={{backgroundColor: "var(--mktg-accent-primary);" ,filter: "blur(18px);" ,transform: "translateZ(0)"}}></span>
          </div>
          <div style={{background: "linear-gradient(#7C72FF, #2DA44E 80%, #3FB950);"}} className="home-campaign-git-line h-full rounded mx-auto lg:w-[5px]"></div>
        </div>
      </div> */}

      

    </section>
  );
};

export default Hero;
