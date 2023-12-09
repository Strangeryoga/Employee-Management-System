import React from 'react'
import { useState } from 'react';

function Mode() {

    const [buttonText, setButtonText] = useState('Dark Mode');

    function toggleTheme(){
        document.documentElement.classList.toggle("dark");
       if(buttonText=='Light Mode'){
        setButtonText('Dark Mode');
       }else{
        setButtonText('Light Mode');
       }
    }


  return (
    <div className='mt-6'>
      <button onClick={toggleTheme} className='absolute right-10 top-39 font-semibold bg-slate-500 text-white px-5 py-3 rounded
      hover:bg-stone-700 '>
       {buttonText}
      </button>
    </div>
  )
}

export default Mode
