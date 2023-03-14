import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import { styled } from '@mui/material';

const CustomVerifiedIcon = styled(VerifiedIcon)({
  fontSize: '1rem',
  color: 'var(--title-color)'
});

const Backend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Backend Developer</h3>

      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <CustomVerifiedIcon />

            <div>
              <h3 className="skills-name">PHP</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>

          <div className="skills-data">
            <CustomVerifiedIcon />

            <div>
              <h3 className="skills-name">NodeJs</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>

          <div className="skills-data">
            <CustomVerifiedIcon />

            <div>
              <h3 className="skills-name">Phyton</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <CustomVerifiedIcon />

            <div>
              <h3 className="skills-name">MySQL</h3>
              <span className="skills-level">Beginner</span>
            </div>
          </div>

          <div className="skills-data">
            <CustomVerifiedIcon />

            <div>
              <h3 className="skills-name">Firebase</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>

          <div className="skills-data">
            <CustomVerifiedIcon />

            <div>
              <h3 className="skills-name">SQL</h3>
              <span className="skills-level">Beginner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Backend;