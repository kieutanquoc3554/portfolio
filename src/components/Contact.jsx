import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex gap-4 mt-6">
      <a href="https://www.facebook.com/quockth30121995" target="_blank">
        <FaFacebook />
      </a>
      <a href="https://github.com/kieutanquoc3554">
        <FaGithub />
      </a>
      <a href="#">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default Contact;
