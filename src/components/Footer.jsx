import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4 text-green-400">Swad</h4>
          <p className="text-sm text-gray-400">
            Serving authentic Indian cuisine with love, tradition, and fresh
            ingredients.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-amber-400">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/menu" className="hover:text-white">
                Menu
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/review" className="hover:text-white">
                Reviews
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-red-400">Contact</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: support@swad.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Hours: 11am – 10pm (Mon–Sun)</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-yellow-300">
            Follow Us
          </h4>
          <div className="flex flex-wrap space-x-4">
            <a
              href=" https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400"
            >
              Instagram
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-12">
        &copy; {new Date().getFullYear()} Swad. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
