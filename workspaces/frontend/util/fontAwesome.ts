// import the library
import { config, library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowAltCircleDown,
  faEnvelope,
  faCopyright,
} from "@fortawesome/free-regular-svg-icons";

config.autoAddCss = false;

library.add(
  faGithub,
  faLinkedin,
  faArrowAltCircleDown,
  faEnvelope,
  faCopyright
);
