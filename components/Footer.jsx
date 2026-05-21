import React from "react";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-blue-400">Tiles Gallery</h2>
          <p className="mt-3 text-gray-400 text-sm leading-6">
            Discover stylish and modern tile collections for your dream home.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm">Email: kanokfaishalhaque018@gmail.com</p>
          <p className="text-gray-400 text-sm">Phone: +880 1581130808</p>
          <p className="text-gray-400 text-sm">Location: chuadange,khulna, Bangladesh</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="p-3 bg-blue-600 rounded-full hover:scale-110 transition"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="https://github.com"
              target="_blank"
              className="p-3 bg-gray-700 rounded-full hover:scale-110 transition"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="p-3 bg-blue-500 rounded-full hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </Link>

            <Link
              href="mailto:support@tilesgallery.com"
              className="p-3 bg-red-500 rounded-full hover:scale-110 transition"
            >
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2026 Tiles Gallery. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;