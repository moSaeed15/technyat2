import {
  FaEnvelope,
  FaMobile,
  FaMapPin,
  FaInstagram,
  FaPhone,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex justify-between bg-darkGrey px-20 py-5 mt-16 items-center text-white">
      <div>
        <h3 className="text-lg font-bold">
          Technyat Specfic Construction <br /> Techniques
        </h3>
        <div className="flex gap-5">
          <ul className="mt-5 space-y-2">
            <li className="flex gap-2 items-center">
              <FaPhone />
              0222698386
            </li>

            <li className="flex gap-2 items-center">
              <FaEnvelope />
              ibrahim_m_gabr@yahoo.com
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex gap-2 items-center">
              <FaMobile />
              01223240161
            </li>
            <li className="flex gap-2 items-center">
              <FaMobile />
              01117004442
            </li>
            <li className="flex gap-2 items-center">
              <FaMobile />
              01032228801
            </li>
          </ul>
        </div>
        <span className="flex gap-2 items-center mt-5 -ml-2">
          <FaMapPin width={20} height={30} />
          12 Mostafa kamel St,beside Florida Mall - Sheraton Elnour buildings -
          Flat1 ,Cairo Egypt
        </span>
      </div>
      <div className=" flex gap-5 self-end pr-28">
        <a href="https://www.instagram.com/technyatspecificconstruction4/">
          <FaInstagram size={42} />
        </a>
        <a href="https://www.facebook.com/technyat/">
          <FaFacebook size={42} />
        </a>
        <a href="https://www.linkedin.com/company/%D8%B4%D8%B1%D9%83%D8%A9-%D8%AA%D9%82%D9%86%D9%8A%D8%A7%D8%AA-%D9%84%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%AE%D8%B5%D8%B5%D9%8A%D8%A9/about/">
          <FaLinkedin size={42} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
