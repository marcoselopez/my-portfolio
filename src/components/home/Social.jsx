import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Social = () => {
  return (
    <div className="home-social">
      <a href="https://www.instagram.com" className="home-social-icon" target='_blank'>
        <InstagramIcon />
      </a>

      <a href="https://www.dribbble.com" className="home-social-icon" target='_blank'>
        <GitHubIcon />
      </a>

      <a href="https://www.github.com" className="home-social-icon" target='_blank'>
        <LinkedInIcon />
      </a>
    </div>
  )
};

export default Social;