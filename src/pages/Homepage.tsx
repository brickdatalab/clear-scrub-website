import { Link } from 'react-router-dom';
import { Zap, DollarSign, Shield } from 'lucide-react';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export default function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gray" className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Subtle geometric pattern background */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,111,70,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
        
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[48px] md:text-[64px] font-bold leading-tight mb-6">
              Bank Statement Underwriting in Seconds, Not Hours
            </h1>
            <p className="text-subhead text-cs-g-500 mb-8 max-w-2xl mx-auto">
              Process merchant applications at half the cost with real technology. 
              Built for MCA underwriters who need speed without compromise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button variant="primary" size="lg">Start Free Trial</Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg">View Pricing</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Value Props Section */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Lightning Fast Processing */}
            <Card hover className="text-center">
              <div className="flex justify-center mb-4">
                <Zap className="text-cs-accent" size={32} />
              </div>
              <h3 className="text-heading mb-3">Lightning Fast Processing</h3>
              <p className="text-body text-cs-g-500">
                Parse and normalize bank statements in under 30 seconds. No queues, no delays.
              </p>
            </Card>
            
            {/* Card 2: Half the Price */}
            <Card hover className="text-center">
              <div className="flex justify-center mb-4">
                <DollarSign className="text-cs-accent" size={32} />
              </div>
              <h3 className="text-heading mb-3">Half the Price, Same Accuracy</h3>
              <p className="text-body text-cs-g-500">
                50% cheaper than MoneyThumb. Pay only for what you process.
              </p>
            </Card>
            
            {/* Card 3: Real Technology */}
            <Card hover className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="text-cs-accent" size={32} />
              </div>
              <h3 className="text-heading mb-3">Real Technology, No Middlemen</h3>
              <p className="text-body text-cs-g-500">
                Our own parsing engine. Your data never leaves our infrastructure.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}