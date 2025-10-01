import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './Button';
import { Container } from './Container';
import logo from '@/assets/clear_scrub.svg';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cs-white/95 backdrop-blur-sm border-b border-cs-g-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="ClearScrub" className="h-[54px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/features" className="text-cs-g-700 hover:text-white hover:bg-cs-accent hover:font-bold transition-all px-4 py-2 rounded-md h-12 flex items-center">
              Features
            </Link>
            <Link to="/pricing" className="text-cs-g-700 hover:text-white hover:bg-cs-accent hover:font-bold transition-all px-4 py-2 rounded-md h-12 flex items-center">
              Pricing
            </Link>
            <a 
              href="https://docs.clearscrub.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cs-g-700 hover:text-white hover:bg-cs-accent hover:font-bold transition-all px-4 py-2 rounded-md h-12 flex items-center"
            >
              API Docs
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <button className="h-12 px-6 bg-cs-accent text-white rounded-lg border-2 border-cs-accent hover:bg-transparent hover:text-cs-g-700 hover:border-cs-g-300 hover:font-bold transition-colors">
                Sign In
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-cs-g-200">
            <div className="flex flex-col gap-4">
              <Link to="/features" className="text-cs-g-700 hover:text-white hover:bg-cs-accent hover:font-bold py-2 px-4 rounded-md transition-all">
                Features
              </Link>
              <Link to="/pricing" className="text-cs-g-700 hover:text-white hover:bg-cs-accent hover:font-bold py-2 px-4 rounded-md transition-all">
                Pricing
              </Link>
              <a 
                href="https://docs.clearscrub.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cs-g-700 hover:text-white hover:bg-cs-accent hover:font-bold py-2 px-4 rounded-md transition-all"
              >
                API Docs
              </a>
              <Link to="/login">
                <Button variant="primary" size="md" className="w-full hover:bg-cs-accent/80 hover:rounded-md transition-all">Sign In</Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}