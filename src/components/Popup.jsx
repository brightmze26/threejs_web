import React from 'react'
import { Link } from "react-router-dom";

const Popup = ({ currentStage }) => {
    if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-gray  text-white py-4 px-8 mx-5'>
        "What is
        <span className='font-semibold mx-2 text-black underline'>Earth</span>?"
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='neo-brutalism-gray text-white py-4 px-8'>
        <p className='font-medium sm:text-xl text-center'>
        <Link to='/discuss'>
        Let's discuss
        </Link>
        </p>
      </div>
    );
  }
  return null;

}

export default Popup
