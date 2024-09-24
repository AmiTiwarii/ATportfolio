import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";



const Works = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring",  0.75)}
        className="w-full flex justify-center items-center"
      >
        <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 150,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[460px] sm:h-[250px] w-full'
        >
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open("https://github.com/AmiTiwarii", "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
          <div className="text-2xl">Go Check Out <br />My <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Projects</span></div>
          <div className='mt-4 flex flex-wrap gap-2'>
            <span className="text-blue-500/80">#next.js</span>
            <span className=" text-purple-600/80">#reactjs</span>
            <span className=" text-green-600/80">#mongoDb</span> <br/>
            <span className=" text-red-500/80">#express.js</span>
            <span className=" text-green-500/80">#nodejs</span>
            <span className=" text-blue-400/70">#typescript</span>
            <span className=" text-orange-400/70">#reactnative</span>
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");
