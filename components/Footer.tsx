import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 md:px-20 border-t border-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Logo Section */}
        <div className="w-full md:w-1/5">
          <img
            src="/logo.png"
            alt="Samarth Sankalp Logo"
            className="w-24 h-24 mx-auto md:mx-0"
          />
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-between flex-grow gap-10 md:gap-20">
          
          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Donate Now</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Volunteer Today</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Our Mission</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Success Stories</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Blog Posts</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Community Events</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Partnerships</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Annual Reports</a></li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Social Media</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Newsletter</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Events Calendar</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Fundraising</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Impact Reports</a></li>
            </ul>
          </div>
          
          {/* Subscribe Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-gray-600 text-sm mb-4">
              Join our newsletter for updates on our initiatives and events.
            </p>
            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 py-2 px-4 border border-gray-300 rounded-md focus:outline-none"
              />
              <button className="py-2 px-6 bg-black text-white rounded-md hover:bg-gray-800 transition">
                Subscribe
              </button>
            </form>
            <p className="text-gray-400 text-xs mt-2">
              By subscribing, you agree to our <a href="#" className="underline">Privacy Policy</a> and consent to updates.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t pt-5">
        <p className="text-sm text-gray-500">
          © 2024 Samarth Sankalp. All rights reserved.
        </p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-black">Terms of Service</a>
          <a href="#" className="text-gray-600 hover:text-black">Cookies Settings</a>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-black"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-gray-600 hover:text-black"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-600 hover:text-black"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-600 hover:text-black"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="text-gray-600 hover:text-black"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
