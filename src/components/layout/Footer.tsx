// src/components/layout/Footer.tsx

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    // REF: Added `bg-white`, `text-gray-500`, `border-gray-200`
    // REF: Prefixed all dark styles
    <footer
      className="bg-white text-gray-500 border-t border-gray-200
                 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-800"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div>
            <h3
              // REF: Added `text-gray-900`, prefixed `text-white`
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              Bhairavnath{" "}
              <span
                // REF: Updated text color
                className="text-blue-600 dark:text-blue-500"
              >
                Skyline
              </span>
            </h3>
            <p className="mt-2 text-sm">
              Delivering dreams, from foundations to rooftops.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              // REF: Added `text-gray-900`, prefixed `text-gray-200`
              className="font-semibold text-sm text-gray-900 uppercase tracking-wider
                         dark:text-gray-200"
            >
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/services/infrastructure"
                  // REF: Added `hover:text-gray-900`, prefixed `hover:text-white`
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to="/services/real-estate"
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  to="/services/water"
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  Water Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/interiors"
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  Interiors
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4
              // REF: Added `text-gray-900`, prefixed `text-gray-200`
              className="font-semibold text-sm text-gray-900 uppercase tracking-wider
                         dark:text-gray-200"
            >
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              // REF: Added `text-gray-900`, prefixed `text-gray-200`
              className="font-semibold text-sm text-gray-900 uppercase tracking-wider
                         dark:text-gray-200"
            >
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <span className="hover:text-gray-900 dark:hover:text-white">
                  info@bhairavnath.com
                </span>
              </li>
              <li>
                <span className="hover:text-gray-900 dark:hover:text-white">
                  +91 123 456 7890
                </span>
              </li>
              <li>
                <span className="hover:text-gray-900 dark:hover:text-white">
                  Pune, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          // REF: Added `border-gray-200`, prefixed `border-gray-800`
          className="mt-12 border-t border-gray-200 pt-8 text-center text-sm
                     dark:border-gray-800"
        >
          <p>
            © {new Date().getFullYear()} Bhairavnath Skyline Private Limited.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
