import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="px-4 mt-40 text-sm text-gray-600">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10">
        {/* Logo + Description */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
          <p className="w-full md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi exercitationem harum nulla iusto unde tempora vero cum laborum natus recusandae, nostrum consequatur?
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-1">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300" />
      <p className="py-5 text-center text-xs sm:text-sm">
        © 2024 Forever.com — All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
