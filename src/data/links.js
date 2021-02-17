import { FaYoutube, FaInstagram, FaVimeo } from "react-icons/fa";

const social = [
  {
    id: 1,
    icon: <FaYoutube />,
    url: "https://www.youtube.com",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    url: "https://www.instagram.com",
  },
  {
    id: 3,
    icon: <FaVimeo />,
    url: "https://www.vimeo.com",
  },
];

const links = [
  {
    url: "/",
    text: "home",
  },
  {
    url: "/about",
    text: "about",
  },
  {
    url: "/contact",
    text: "contact",
  },
];

export { social, links };
