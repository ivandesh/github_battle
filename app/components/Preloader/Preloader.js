import React from 'react';
import './Preloader.css'

const Preloader = ({text = 'Loading', color = '#212121'}) => {
  return (
    <div className='preloader' style={{color: color}}>
      {text}
    </div>
  );
}

export default Preloader;
