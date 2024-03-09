import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { name: "linkedin", url: "https://www.linkedin.com/in/lui-lousada-ferreira-165734117/", icon: <FaLinkedinIn /> },
  { name: "github", url: "https://github.com/LuiLF", icon: <FaGithub /> },
  { name: "instagram", url: "https://www.instagram.com/luilouf/", icon: <FaInstagram /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.url} target="_blank" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
