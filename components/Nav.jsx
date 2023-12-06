import Image from 'next/image';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
const Nav = () => {
  return (
    <nav className="flex justify-between bg-darkGrey px-20 items-center">
      <Image
        src="/assets/logo-2.png"
        alt="Logo"
        width={300}
        height={0}
        className="logo"
      />
      <div className="flex gap-2">
        <span className=" text-white">Contact Us:</span>
        <div className="text-white flex  gap-3">
          {/* Put phone and email icons */}
          <span className="flex  gap-2 items-center">
            <FaEnvelope />
            ibrahim_m_gabr@yahoo.com
          </span>
          <span className="flex gap-2 items-center">
            <FaPhone />
            01223240161
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
