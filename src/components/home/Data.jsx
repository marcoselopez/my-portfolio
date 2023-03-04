import { Send } from '@mui/icons-material';
import { Divider } from '@mui/material';

const Data = () => {
  return (
    <div className="home-data">
      <h1 className="home-title">
        Marcos López
      </h1>
      <h3 className="home-subtitle">Developer</h3>
      <p className="home-description">I'm a very resilient developer currently based in Argentina.</p>
      <Divider sx={{ marginBottom: 'var(--mb-2)'}} />
      <a href="#contact" className="button button-flex">
        Say Hello!
        <Send className="button-icon" />
      </a>
    </div>
  )
};

export default Data;