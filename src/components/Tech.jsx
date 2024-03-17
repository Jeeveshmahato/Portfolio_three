import React from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../Constants';
import { BallCanvas } from './canvas';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex gap-2 items-center justify-center' key={technology.name}>
          <div className=' hidden xl:flex  flex-col   items-center'>
            <BallCanvas icon={technology.icon} />
            
          </div>
          <div className=' flex xl:hidden flex-col gap-2 items-center justify-center'>
            <img src={technology.icon} alt={technology.name} />
            <p className=' text-[14px] font-inter  md:text-[18px] font-[500]'>{technology.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
