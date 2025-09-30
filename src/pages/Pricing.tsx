import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <>
      <Section background="gray" className="pt-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display mb-6">Simple, Transparent Pricing</h1>
            <p className="text-subhead text-cs-g-500">
              No monthly fees. No contracts. Pay only for what you process.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pay As You Go */}
            <Card hover className="p-8 border-2 border-cs-accent h-full">
              <h2 className="text-heading mb-4">Pay As You Go</h2>
              <div className="mb-6">
                <span className="text-[48px] font-bold text-cs-accent">$0.50</span>
                <span className="text-cs-g-500"> per PDF</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="text-cs-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">Bank statement parsing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cs-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">Transaction normalization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cs-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">Quantum Data™ Append</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cs-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cs-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">CRM integrations</span>
                </li>
              </ul>
              <Link to="/login?mode=signup">
                <Button variant="primary" className="w-full">Start Free Trial</Button>
              </Link>
            </Card>

            {/* Enterprise */}
            <Card hover className="p-8 h-full">
              <h2 className="text-heading mb-4">Enterprise</h2>
              <div className="mb-6">
                <span className="text-[48px] font-bold">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="text-cs-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">Everything in Pay As You Go</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cs-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">Volume discounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cs-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">Dedicated support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cs-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cs-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">SLA guarantees</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="secondary" className="w-full">Contact Sales</Button>
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background="gray">
        <Container>
          <h2 className="text-display text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-heading mb-2">Is there a free trial?</h3>
              <p className="text-body text-cs-g-500">
                Yes! Process your first 10 PDFs free. No credit card required.
              </p>
            </div>
            <div>
              <h3 className="text-heading mb-2">How does billing work?</h3>
              <p className="text-body text-cs-g-500">
                You're charged per PDF processed. No monthly fees or subscriptions.
              </p>
            </div>
            <div>
              <h3 className="text-heading mb-2">What file formats do you support?</h3>
              <p className="text-body text-cs-g-500">
                We support PDF, CSV, Excel, and scanned documents (with OCR).
              </p>
            </div>
            <div>
              <h3 className="text-heading mb-2">Can I cancel anytime?</h3>
              <p className="text-body text-cs-g-500">
                There's nothing to cancel. Pay as you go with no contracts.
              </p>
            </div>
            <div>
              <h3 className="text-heading mb-2">Do you offer volume discounts?</h3>
              <p className="text-body text-cs-g-500">
                Yes! Contact us for custom pricing if you process 1000+ PDFs per month.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}