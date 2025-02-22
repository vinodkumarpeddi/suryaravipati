'use client'

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

type SocialLink = {
  href: string;
  icon: JSX.Element;
  alt: string;
};

const socialLinks: SocialLink[] = [
  { href: 'https://github.com/23a95a1210', icon: <FaGithub />, alt: 'GitHub' },
  { href: 'https://www.linkedin.com/in/surya-ravipati-653ab72a8', icon: <FaLinkedin />, alt: 'LinkedIn' },
  { href: 'https://x.com/surya__ravipati', icon: <FaTwitter />, alt: 'Twitter X' },
  { href: 'https://www.instagram.com/surya__ravipati/', icon: <FaInstagram />, alt: 'Instagram' },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white rounded-2xl shadow-xl overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:items-stretch">
          {/* Left Side */}
          <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-white drop-shadow-lg">
              Let&apos;s Work Together!
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Get in touch to start an exciting collaboration! I&apos;m always open to new opportunities.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, icon, alt }, key) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-14 h-14 text-xl bg-gray-800 hover:bg-gradient-to-r from-teal-500 to-blue-600 transition-all rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110"
                  aria-label={alt}
                >
                  {icon}
                  <span className="absolute -bottom-10 hidden group-hover:flex px-3 py-1 text-sm text-white bg-black bg-opacity-80 rounded-md shadow-lg transition-all">
                    {alt}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://getform.io/f/bpjjdywb"
            method="POST"
            className="max-w-lg mx-auto lg:pl-10 2xl:pl-20 bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 backdrop-blur-md"
          >
            <div className="md:grid md:grid-cols-2 md:gap-4">
              {/* Name Input */}
              <div className="mb-4">
                <label htmlFor="name" className="text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Surya Ravipati"
                  className="w-full p-3 rounded-lg bg-gray-700 border-none focus:ring-2 focus:ring-teal-500 text-white transition"
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Surya@gmail.com"
                  className="w-full p-3 rounded-lg bg-gray-700 border-none focus:ring-2 focus:ring-teal-500 text-white transition"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="mb-4">
              <label htmlFor="message" className="text-gray-300">Message</label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Hey Surya, let&apos;s work on something amazing!"
                className="w-full p-3 rounded-lg bg-gray-700 border-none focus:ring-2 focus:ring-teal-500 text-white transition resize-y min-h-32 max-h-80"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg transition-all duration-300 hover:scale-105 shadow-md focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
