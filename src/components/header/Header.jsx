import { useState } from 'react';
import './header.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className='header'>
      <nav className="nav container">
        <a href='index.html' className="nav-logo">
          Marcos
        </a>

        <div className={toggleMenu ? 'nav-menu show-menu' : 'nav-menu'}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#home" className="nav-link active-link">
                <HomeOutlinedIcon className="nav-icon" /> Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link">
              <PersonOutlineOutlinedIcon className="nav-icon" /> About
              </a>
            </li>

            <li className="nav-item">
              <a href="#skills" className="nav-link">
                <StickyNote2OutlinedIcon className="nav-icon" /> Skills
              </a>
            </li>

            <li className="nav-item">
              <a href="#services" className="nav-link">
                <BusinessCenterOutlinedIcon className="nav-icon" /> Services
              </a>
            </li>

            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                <ImageOutlinedIcon className="nav-icon" /> Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <EmailOutlinedIcon className="nav-icon" /> Contact
              </a>
            </li>
          </ul>

          <CloseIcon className="nav-close" onClick={() => setToggleMenu(!toggleMenu)} />
        </div>

        <div className="nav-toggle" onClick={() => setToggleMenu(!toggleMenu)}>
          <AppsOutlinedIcon />
        </div>
      </nav>
    </header>
  )
};

export default Header;