import { Link } from 'react-router-dom';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="bg-cs-g-900 text-cs-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-cs-g-400 hover:text-cs-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-cs-g-400 hover:text-cs-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a 
                  href="https://docs.clearscrub.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cs-g-400 hover:text-cs-white transition-colors"
                >
                  API Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-cs-g-400 hover:text-cs-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cs-g-400 hover:text-cs-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/status" className="text-cs-g-400 hover:text-cs-white transition-colors">
                  Platform Status
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-cs-g-400 hover:text-cs-white transition-colors">
                  Publications
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-cs-g-400 hover:text-cs-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-cs-g-400 hover:text-cs-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <p className="text-cs-g-400">
              <a href="mailto:hello@clearscrub.io" className="hover:text-cs-white transition-colors">
                hello@clearscrub.io
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-cs-g-700 pt-8">
          <p className="text-cs-g-400 text-sm text-center">
            © 2025 Clear Scrub. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}