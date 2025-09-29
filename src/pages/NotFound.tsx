import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Button } from '../components/Button';

export default function NotFound() {
  return (
    <Section background="white" className="min-h-screen flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-[96px] font-bold text-cs-g-200">404</h1>
          <h2 className="text-display mb-4">Page Not Found</h2>
          <p className="text-subhead text-cs-g-500 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button variant="primary" size="lg">Back to Home</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}