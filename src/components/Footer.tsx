import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Twitter, Facebook, Youtube, Instagram, Sparkles } from "lucide-react";
import logo from "../Assetes/Pranexit_Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        
        {/* --- Increased horizontal gap between Services and Contact --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-8 mb-8">

          
          {/* Brand Section */}
          <div>
            <a href="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="Pranexity Logo"
                className="w-20 h-auto object-contain transition-transform hover:scale-105"
              />
            </a>
            <p className="text-gray-300 text-sm mb-4">
              AI that elevates, not just automates. Empowering communities with accessible technology.
            </p>
            <p className="italic text-cyan-400 text-sm mb-6">
              “Building intelligence with empathy.”
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://in.linkedin.com/company/empathytechnologies365"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-10 h-5" />
              </a>
              <a
                href="https://x.com/ETMicrosoft365"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-10 h-5" />
              </a>
              <a
                href="https://www.facebook.com/pranexity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook className="w-10 h-5" />
              </a>
              <a
                href="https://www.instagram.com/pranexity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-10 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@EmpathyTechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Youtube className="w-10 h-5" />
              </a>
              <a
                href="https://www.glassdoor.co.in/Reviews/Empathy-Technologies-Reviews-E10323350.htm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Glassdoor"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Sparkles className="w-10 h-5" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-400">Our Services</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Healthcare", path: "/services" },
                { name: "Education", path: "/services" },
                { name: "Finance", path: "/services" },
                { name: "Retail", path: "/services" },
                { name: "Agriculture", path: "/services" },
                { name: "Logistics", path: "/services" },
                { name: "Smart Cities", path: "/services/smart" },
              ].map((service) => (
                <button
                  key={service.name}
                  onClick={() => handleServiceClick(service.path)}
                  className="text-gray-200 text-sm text-center bg-slate-800 rounded-lg px-4 py-2 hover:bg-cyan-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all shadow-md"
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:ml-8"> {/* <-- added slight left margin for better spacing */}
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a
                  href="mailto:support@pranexity.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  support@pranexity.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Pranexity. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
