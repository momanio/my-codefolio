// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
import newLogo from "./images/omars-logo.svg";

// Projects Images (add your images to the images directory and import below)
import Logo1 from "./images/prj-image1.png";
import Logo2 from "./images/prj-image2.png";
import BandarPrj from "./images/bandar-app.png";
// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/background-img2.png";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "momanio";

// Navbar Logo image
export const navLogo = newLogo;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Frontend Developer With expertise in JavaScript, HTML5, CSS3, and frameworks like Angular and React, Im dedicated to delivering top-quality code and responsive designs on tight deadlines. My collaborative spirit and commitment to staying updated with the latest trends ensure I provide efficient solutions.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/

export const EduInfo = `Bachelor's Degree in Software Engineering`;
export const UniversityInfo = `Jordan University of scinse and technology`;
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },

  {
    id: 4,
    skill: <Icon icon="mdi:language-typescript" className="display-4" />,
    name: "TypeScript",
  },

  {
    id: 5,
    skill: <Icon icon="mdi:angular" className="display-4" />,
    name: "Angular",
  },
  {
    id: 6,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 7,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 8,
    skill: <Icon icon="mdi:sass" className="display-4" />,
    name: "Sass",
  },
  {
    id: 9,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume =
  "https://drive.google.com/file/d/1oILy3Sca5uSM02N9Yz-5CXPIVJLwsTnD/view?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = [
  "bandar-app",
  "angular-project",
  "my-codefolio",
];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "bandar-app",
    image: BandarPrj,
  },
  {
    name: "angular-project",
    image: Logo1,
  },
  {
    name: "my-codefolio",
    image: Logo2,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mrgwjgjw";
