import "./about.css";
import AboutImg from '../../assets/profilePic.jfif';
import Info from "./Info";
import CV from '../../assets/Marcos_Lopez_Resume.pdf';
import FilePresentIcon from '@mui/icons-material/FilePresent';


const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About me</h2>
      <span className="section-subtitle">My introduction</span>
      <div className="about-container container grid">
        <img src={AboutImg} alt="about" className="about-img" />

        <div className="about-data">
          <Info />

          <p className="about-description">
            I am a very passionate frontend developer who enjoys working on UI/UX driven projects to create marvelous and beautiful things!.
          </p>

          <a download="" href={CV} className="button button-flex">Download CV <FilePresentIcon className="button-icon" /> </a>
        </div>
      </div>
    </section>
  )
};

export default About;