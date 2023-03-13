import React from 'react';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';

const Info = () => {
  return (
    <div className="about-info">
      <div className="about-box">
      <WorkspacePremiumIcon className="about-icon" />
        <h3 className="about-title">Experience</h3>
        <span className="about-subtitle">2 Years working</span>
      </div>

      <div className="about-box">
        <WorkOutlineOutlinedIcon className="about-icon" />
        <h3 className="about-title">Completed</h3>
        <span className="about-subtitle">10+ Projects</span>
      </div>

      <div className="about-box">
        <EmojiObjectsOutlinedIcon className="about-icon" />
        <h3 className="about-title">Support</h3>
        <span className="about-subtitle">Over 2000 users</span>
      </div>
    </div>
    )
};

export default Info;