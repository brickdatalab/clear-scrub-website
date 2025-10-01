import { Link } from 'react-router-dom';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="bg-cs-white py-16 border-t border-cs-g-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-cs-black">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-cs-g-700 hover:text-cs-black transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-cs-g-700 hover:text-cs-black transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a 
                  href="https://docs.clearscrub.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cs-g-700 hover:text-cs-black transition-colors"
                >
                  API Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-cs-black">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-cs-g-700 hover:text-cs-black transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cs-g-700 hover:text-cs-black transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/status" className="text-cs-g-700 hover:text-cs-black transition-colors">
                  Platform Status
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-cs-g-700 hover:text-cs-black transition-colors">
                  Publications
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-cs-black">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-cs-g-700 hover:text-cs-black transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-cs-g-700 hover:text-cs-black transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cs-g-200 pt-8">
          <p className="text-cs-g-700 text-sm text-center">
            © 2025 Clear Scrub. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}