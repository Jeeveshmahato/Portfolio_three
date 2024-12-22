import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { menu, close } from '../assets';
import img1 from '../assets/logo.png';
import { navLinks } from '../Constants';

const NewNavbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/16GwR1KhNF9OxDtT56Prymla2qOMVUnC_/view?usp=sharing'; // Replace with the path to your resume file
    link.setAttribute('download', 'Jeevesh.cv'); // Set the download attribute
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={img1} alt='logo' className='w-9 h-9 object-contain' />
          <p className='flex text-[18px] text-white font-bold cursor-pointer'>
            Jeevesh &nbsp; <span className='sm:block hidden'>| Software Developer</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li
            className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            onClick={handleDownload}
          >
            My Resume
          </li>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-w[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins hover:text-white text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle); setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li
                className="text-secondary hover:text-white text-[16px] font-medium cursor-pointer"
                onClick={handleDownload}
              >
                My Resume
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;
