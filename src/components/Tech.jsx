import React from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../Constants';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex gap-2 items-center justify-center' key={technology.name}>
          {/* Replace BallCanvas with your desired element or component */}
          <div className=' flex flex-col gap-2 items-center justify-center'>
            <img src={technology.icon} alt={technology.name} />
            <p className=' text-[14px] font-inter  md:text-[18px] font-[500]'>{technology.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
