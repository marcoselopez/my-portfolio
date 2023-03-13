import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';

const Frontend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Frontend Developer</h3>

      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <VerifiedIcon />

            <div>
              <h3 className="skills-name">HTML</h3>
              <span className="skills-level">Advanced</span>
            </div>
          </div>

          <div className="skills-data">
            <VerifiedIcon />

            <div>
              <h3 className="skills-name">CSS</h3>
              <span className="skills-level">Advanced</span>
            </div>
          </div>

          <div className="skills-data">
            <VerifiedIcon />

            <div>
              <h3 className="skills-name">Javascript</h3>
              <span className="skills-level">Advanced</span>
            </div>
          </div>
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <VerifiedIcon />

            <div>
              <h3 className="skills-name">Material UI</h3>
              <span className="skills-level">Advanced</span>
            </div>
          </div>

          <div className="skills-data">
            <VerifiedIcon />

            <div>
              <h3 className="skills-name">React</h3>
              <span className="skills-level">Advanced</span>
            </div>
          </div>

          <div className="skills-data">
            <VerifiedIcon />

            <div>
              <h3 className="skills-name">Angular</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Frontend;