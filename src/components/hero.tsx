import React from 'react';
import HeroImage from '../assets/banner-stack.png'

const Hero = () => {
  return (
    <div className='max-w-[80%] mx-auto  flex items-center justify-between'>

      <div>
        <h2 className='font-bold text-6xl pb-6'>
          Build Your <br/>
          <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span>
        </h2>
        <p className='pb-7'>
          Explore frontend, backend, database, and tooling options,<br/>
          compare them side by side, and put together the stack that fits your<br/>
          next project.
        </p>

        <div className='flex gap-3'>
        <button className='bg-gradient-to-r from-[#F97316] to-[#EC4899] border rounded-2xl px-2 py-3 font-semibold text-[14] text-[#FFFFFF]'> Explore Technologies</button>
        <button className='bg-[#FFFFFF] border rounded-2xl px-11 border-[#E5E7EB]' > Learn More</button>
        </div>
      </div>

      <div>
        <img src={HeroImage} alt="" />
      </div>

      
    </div>
  );
};

export default Hero;
