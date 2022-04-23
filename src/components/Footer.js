import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faTwitter,
  faFacebook,
  faInstagram,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <FontAwesomeIcon icon={faTwitter} className="twitter" />
      <FontAwesomeIcon icon={faFacebook} className="facebook" />
      <FontAwesomeIcon icon={faInstagram} className="instagram" />
      <FontAwesomeIcon icon={faDiscord} className="discord" />
    </footer>
  );
}
