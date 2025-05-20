import React from 'react';
import error from '../assets/Error.jpg'

const Error = () => {
    return (
        <div className='bg-[#F8EDE3]'>
            <div className='mx-auto w-11/12 text-center py-40 pb-80 '>
                  <h2 className='font-bold text-5xl text-[#3A0519] '>404</h2>
            <h2 className='font-bold text-2xl text-[#3A0519] '>Page not Found!!</h2>
            <img className='w-70 h-70 ml-130 my-10' src={error} alt="" />

            </div>
          
            
            
        </div>
    );
};

export default Error;