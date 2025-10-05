import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <>
      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-cs-text-headline">
              Transparent, Usage-Based Pricing.
            </h1>
            <p className="text-xl text-cs-text-main">
              No setup fees. No minimums. No annual contracts. Stop paying the "middleman markup."
            </p>
          </div>
        </Container>
      </Section>

      <Section background="gray" className="bg-cs-divider-bg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Developer (Free Tier) */}
            <Card hover className="p-8 h-full">
              <h2 className="text-3xl font-bold mb-4 text-cs-text-headline">Developer</h2>
              <div className="mb-6">
                <span className="text-5xl font-bold text-cs-text-headline">Free</span>
              </div>
              <p className="text-cs-text-main mb-8">
                Everything you need to build and test your integration risk-free.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="text-cs-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">First 500 statements/month free</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cs-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">Full API access and SDKs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cs-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">Sandbox environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cs-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">Discord community support</span>
                </li>
              </ul>
              <Link to="/login?mode=signup">
                <Button variant="secondary" className="w-full">Get Started Free</Button>
              </Link>
            </Card>

            {/* Growth (Pay-As-You-Go) */}
            <Card hover className="p-8 border-2 border-cs-primary h-full">
              <h2 className="text-3xl font-bold mb-4 text-cs-text-headline">Growth</h2>
              <div className="mb-6">
                <span className="text-5xl font-bold text-cs-primary">Pay-As-You-Go</span>
              </div>
              <p className="text-cs-text-main mb-8">
                Radically lower pricing than industry standards, scaling as you grow.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="text-cs-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">Everything in Developer, plus:</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cs-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">Transparent per-statement pricing (Contact us for details)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cs-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">Automatic Volume Discounts (10K+ and 100K+ statements)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cs-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">Hybrid AI Human Review Platform access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-cs-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-body">Data residency options and SOC 2 compliance</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="primary" className="w-full">Contact Sales</Button>
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Comparison Table */}
      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-cs-text-headline">
              How We Compare: The End of Predatory Pricing.
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-cs-g-200">
                    <th className="text-left py-4 px-6 text-cs-text-headline font-semibold">Feature</th>
                    <th className="text-left py-4 px-6 bg-cs-intelligence/5 border-l-4 border-cs-intelligence">
                      <span className="text-cs-intelligence font-bold">ClearScrub</span>
                    </th>
                    <th className="text-left py-4 px-6 text-cs-text-headline font-semibold">
                      "Workflow Wrappers"<br />
                      <span className="text-sm font-normal text-cs-g-500">(e.g., Heron)</span>
                    </th>
                    <th className="text-left py-4 px-6 text-cs-text-headline font-semibold">
                      "Legacy Processors"<br />
                      <span className="text-sm font-normal text-cs-g-500">(e.g., MoneyThumb)</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Pricing Model', clearscrub: 'Usage-Based', workflow: 'Contracts/Subscription', legacy: 'Subscription Required' },
                    { feature: 'Free Tier', clearscrub: 'Yes (500/month)', workflow: 'Limited Trial', legacy: 'No' },
                    { feature: 'Processing Speed', clearscrub: '< 5 seconds', workflow: '1-4 minutes', legacy: '< 5 seconds' },
                    { feature: 'Merchant Enrichment', clearscrub: 'Yes (Standard)', workflow: 'Yes (Expensive Add-on)', legacy: 'No' },
                    { feature: 'Developer SDKs', clearscrub: '8 Languages', workflow: 'Limited', legacy: 'Basic API' },
                    { feature: 'Confidence Scores', clearscrub: 'Yes', workflow: 'No', legacy: 'No' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-cs-g-200">
                      <td className="py-4 px-6 font-medium text-cs-text-headline">{row.feature}</td>
                      <td className="py-4 px-6 bg-cs-intelligence/5 border-l-4 border-cs-intelligence">
                        <span className="text-cs-intelligence font-semibold">{row.clearscrub}</span>
                      </td>
                      <td className="py-4 px-6 text-cs-text-main">{row.workflow}</td>
                      <td className="py-4 px-6 text-cs-text-main">{row.legacy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}