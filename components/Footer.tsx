import Link from "next/link";
import { Mail, Phone, Facebook } from "lucide-react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Portfolio", href: "/portfolio-work" },
  { name: "Clients", href: "/clients" },
  { name: "Education", href: "/education" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="backdrop-blur-md border-t border-gray-800 dark:border-gray-700 text-gray-600 dark:text-gray-400 py-6 transition-colors font-sans shadow-sm" style={{ backgroundColor: 'var(--footer-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/adeen.png"
              alt="Mirza Adeel Baig Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-18 object-contain rounded-full"
            />
            <p className="mt-1 text-[10px] text-center md:text-left font-bold tracking-wider">Expertise in Driving Results.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xs font-bold text-gray-900 dark:text-white mb-2 tracking-wider uppercase">Quick Links</h3>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xs font-bold text-gray-900 dark:text-white mb-2 tracking-wider uppercase">Contact</h3>
            <div className="flex flex-col space-y-1.5">
              <a
                href="mailto:mradeel_15@yahoo.com"
                className="flex items-center gap-1.5 text-[10px] font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors tracking-wider"
              >
                <Mail size={12} />
                <span>mradeel_15@yahoo.com</span>
              </a>
              <a
                href="tel:+923353112441"
                className="flex items-center gap-1.5 text-[10px] font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors tracking-wider"
              >
                <Phone size={12} />
                <span>+92 335 3112441</span>
              </a>
              <a
                href="https://www.facebook.com/mirza.a.baig.180"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[10px] font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors tracking-wider"
              >
                <Facebook size={12} />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-3 border-t border-gray-800 dark:border-gray-700">
          <p className="text-[10px] text-center font-bold tracking-wider">
            &copy; {new Date().getFullYear()} Mirza Adeel Baig. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
