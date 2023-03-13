import React from 'react';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import SouthIcon from '@mui/icons-material/South';

const ScrollDown = () => {
  return (
    <div className="home-scroll">
      <a href="#about" className="home-scroll-button button-flex">
        <span className="home-scroll-name">Sroll Down</span>
        <MouseOutlinedIcon className="home-scroll-mouse" sx={{ marginLeft: 'var(--mb-0-5)' }} />
        <SouthIcon className="home-scroll-mouse mouse" />
      </a>
    </div>
  )
};

export default ScrollDown;