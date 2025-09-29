import { Section } from '../components/Section';
import { Container } from '../components/Container';

export default function Status() {
  return (
    <Section background="white" className="pt-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-cs-accent rounded-full"></div>
            <h1 className="text-display">System Status</h1>
          </div>
          <p className="text-subhead text-cs-g-500">All systems operational</p>
        </div>
      </Container>
    </Section>
  );
}