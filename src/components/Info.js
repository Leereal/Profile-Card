import userImage from '../user.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function Info() {
  return (
    <div className="info">
      <img src={userImage} alt="profile" width="300" />
      <h3 className="name">Laura Smith</h3>
      <h5 className="job-title">Frontend Developer</h5>
      <a href="laura.website" className="website">
        laura.website
      </a>
      <div className="contact-buttons">
        <button className="email">
          <FontAwesomeIcon icon={faEnvelope} className="envelope" />
          Email
        </button>
        <button className="linkedin">
          <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
