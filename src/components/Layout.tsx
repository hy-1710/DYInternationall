import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Overview', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-border-light h-[100px] flex flex-col justify-center sticky top-0 z-50 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-4">
              <img src="/logo.jpeg" alt="DY International" className="w-16 h-16 object-contain" />
              <span className="font-serif font-[700] text-[24px] sm:text-[32px] uppercase tracking-wide">
                <span className="text-primary">DY</span>{' '}
                <span className="text-[#228b22]">INTERNATIONAL</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-[30px]">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[14px] font-[600] uppercase tracking-[0.5px] transition-colors hover:text-accent ${
                  isActive(link.path) ? 'text-primary' : 'text-text-main'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-main hover:text-accent focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[100px] left-0 w-full bg-white border-b border-border-light shadow-sm">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-[14px] font-[600] uppercase tracking-[0.5px] ${
                  isActive(link.path)
                    ? 'text-primary bg-bg-light'
                    : 'text-text-main hover:text-accent hover:bg-bg-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-border-light text-text-light pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <BrandLogo className="w-14 h-14" />
              <div className="font-serif font-[700] text-[24px] sm:text-[28px] uppercase tracking-wide">
                <span className="text-primary">DY</span>{' '}
                <span className="text-[#228b22]">INTERNATIONAL</span>
              </div>
            </div>
            <p className="text-[14px] max-w-sm mb-6 leading-[1.6]">
              DY International is a leading name in global trade, specializing in the distribution of high-grade agro-fertilizers and industrial chemicals.
            </p>
          </div>

          <div>
            <h3 className="text-primary font-[700] text-[16px] mb-4">Links</h3>
            <ul className="space-y-2 text-[14px]">
              <li><Link to="/" className="hover:text-accent transition-colors">Overview</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-[700] text-[16px] mb-4">Contact Info</h3>
            <ul className="space-y-3 text-[13px]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>HQ: Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+91 9510391451<br/>+91 9714197323</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>dyinternational27@gmail.com <br/>
                info@dyinternationalgroup.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border-light h-[60px] flex flex-col md:flex-row justify-between items-center text-[12px]">
          <p>&copy; {new Date().getFullYear()} DY International. All Rights Reserved.</p>
          {/* <div className="mt-2 md:mt-0 font-[600]">
             ISO 9001:2015 Certified Trade House
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-bg-light">
      <Navbar />
      <main className="flex-grow flex flex-col items-center">
        {children}
      </main>
      <Footer />
      {/* Floating WhatsApp button — replace number with your WhatsApp business number */}
      <a
        href="https://wa.me/919510391451"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </a>
    </div>
  );
}
