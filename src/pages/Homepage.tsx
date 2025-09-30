import { Link } from 'react-router-dom';
import { Zap, DollarSign, Shield, Upload, Cpu, Download } from 'lucide-react';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { HeaderFlowConnector } from '../components/HeaderFlowConnector';

export default function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gray" className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Flow Connector Background */}
        <HeaderFlowConnector />
        
        {/* Subtle geometric pattern background */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,111,70,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
        
        <Container className="relative z-10">
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

      {/* How It Works Section */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-display mb-4">How It Works</h2>
            <p className="text-subhead text-cs-g-500">Three steps to cleaner data</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Add connecting line between steps on desktop */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-cs-g-300 -z-10" />
            
            {/* Step 1: Upload */}
            <div className="text-center relative">
              <div className="w-16 h-16 bg-cs-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="text-white" size={28} />
              </div>
              <h3 className="text-heading mb-2">Upload</h3>
              <p className="text-body text-cs-g-500">
                Drop bank statements or connect via API
              </p>
            </div>
            
            {/* Step 2: Process */}
            <div className="text-center relative">
              <div className="w-16 h-16 bg-cs-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="text-white" size={28} />
              </div>
              <h3 className="text-heading mb-2">Process</h3>
              <p className="text-body text-cs-g-500">
                AI normalizes transactions in real-time
              </p>
            </div>
            
            {/* Step 3: Export */}
            <div className="text-center relative">
              <div className="w-16 h-16 bg-cs-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="text-white" size={28} />
              </div>
              <h3 className="text-heading mb-2">Export</h3>
              <p className="text-body text-cs-g-500">
                Push to your CRM or download clean data
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Preview Section */}
      <Section background="white">
        <Container>
          <div className="space-y-24">
            {/* Feature 1: Transaction Normalization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-cs-g-100 rounded-2xl h-80 flex items-center justify-center">
                <p className="text-cs-g-400">[Screenshot: Transaction Table]</p>
              </div>
              <div>
                <h2 className="text-display mb-4">Transaction Normalization</h2>
                <p className="text-body text-cs-g-500 mb-6">
                  Automatically categorize and standardize merchant names, amounts, 
                  and dates. Export to any CRM format.
                </p>
                <Link to="/features">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>

            {/* Feature 2: Quantum Data™ Append (reversed layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-display mb-4">Quantum Data™ Append</h2>
                <p className="text-body text-cs-g-500 mb-6">
                  Enrich contact records with verified phone numbers, emails, 
                  and business details. Boost outreach accuracy.
                </p>
                <Link to="/features">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
              <div className="bg-cs-g-100 rounded-2xl h-80 flex items-center justify-center order-1 md:order-2">
                <p className="text-cs-g-400">[Screenshot: Data Enrichment]</p>
              </div>
            </div>

            {/* Feature 3: API Integration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-cs-g-100 rounded-2xl h-80 flex items-center justify-center">
                <p className="text-cs-g-400">[Screenshot: API Code]</p>
              </div>
              <div>
                <h2 className="text-display mb-4">API-First Architecture</h2>
                <p className="text-body text-cs-g-500 mb-6">
                  Integrate directly into your workflow. REST API, webhooks, 
                  and batch processing included.
                </p>
                <Link to="/features">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Positioning Section */}
      <Section background="gray">
        <Container>
          <h2 className="text-display text-center mb-16">Built Different</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card>
              <h3 className="text-heading mb-4 text-cs-g-500">What others do</h3>
              <ul className="space-y-3 text-body text-cs-g-500">
                <li>• Outsource to legacy systems</li>
                <li>• Charge premium rates</li>
                <li>• Create data silos</li>
                <li>• Manual processing delays</li>
              </ul>
            </Card>
            
            <Card>
              <h3 className="text-heading mb-4 text-cs-accent">What we do</h3>
              <ul className="space-y-3 text-body text-cs-black">
                <li>• Native processing engine</li>
                <li>• Transparent pricing</li>
                <li>• Seamless CRM integration</li>
                <li>• Real-time automation</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Pricing Preview Section */}
      <Section background="white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-display mb-4">Simple, Transparent Pricing</h2>
            <p className="text-[40px] font-bold text-cs-accent mb-4">$0.50 per PDF</p>
            <p className="text-body text-cs-g-500 mb-8">
              No monthly fees. No hidden costs. Pay only for what you process.
            </p>
            <Link to="/pricing">
              <Button variant="primary" size="lg">See Full Pricing</Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section background="dark">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-display mb-4">Ready to Speed Up Your Underwriting?</h2>
            <p className="text-subhead text-cs-g-400 mb-8">
              Start processing bank statements faster. No credit card required.
            </p>
            <Link to="/login">
              <Button variant="primary" size="lg">Create Free Account</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}