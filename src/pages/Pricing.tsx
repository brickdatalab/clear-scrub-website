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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-cs-text-headline">
              Choose the plan that fits your needs
            </h1>
          </div>
        </Container>
      </Section>

      <Section background="gray" className="bg-cs-divider-bg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Pay-As-You-Go */}
            <Card className="p-8 bg-[#E8F5E9] border-0">
              <h2 className="text-3xl font-bold mb-4 text-cs-text-headline">Pay-As-You-Go</h2>
              <div className="mb-4">
                <span className="text-5xl font-bold text-cs-text-headline">$0.50</span>
                <span className="text-xl text-cs-text-main">/credit</span>
              </div>
              <p className="text-cs-text-main mb-8">
                Base plan with flexible usage
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">$0.50 per credit</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">$25 minimum purchase</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">Email support</span>
                </li>
              </ul>
              <button className="w-full bg-[#006F46] hover:bg-[#005a38] text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                Current Plan
              </button>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 border-2 border-cs-text-headline relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-[#006F46] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-cs-text-headline">Pro Plan</h2>
              <div className="mb-4">
                <span className="text-5xl font-bold text-cs-text-headline">$299</span>
                <span className="text-xl text-cs-text-main">/month</span>
              </div>
              <p className="text-cs-text-main mb-8">
                20% off Pay-as-you-go
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">750 credits included</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">$0.40 per overage credit</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">Full API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">Webhooks</span>
                </li>
              </ul>
              <button className="w-full bg-[#006F46] hover:bg-[#005a38] text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                Upgrade
              </button>
            </Card>

            {/* Elite Plan */}
            <Card className="p-8 border-2 border-cs-g-200">
              <h2 className="text-3xl font-bold mb-4 text-cs-text-headline">Elite Plan</h2>
              <div className="mb-4">
                <span className="text-5xl font-bold text-cs-text-headline">$999</span>
                <span className="text-xl text-cs-text-main">/month</span>
              </div>
              <p className="text-cs-text-main mb-8">
                30% off Pay-as-you-go
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">2,855 credits included</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">$0.35 per overage credit</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">Full API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">Dedicated support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">SLA guarantee</span>
                </li>
              </ul>
              <button className="w-full bg-cs-text-headline hover:bg-cs-text-headline/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                Upgrade
              </button>
            </Card>

            {/* Developer (Free Tier) */}
            <Card className="p-8 border-2 border-cs-g-200">
              <h2 className="text-3xl font-bold mb-4 text-cs-text-headline">Developer</h2>
              <div className="mb-4">
                <span className="text-5xl font-bold text-cs-text-headline">Free</span>
              </div>
              <p className="text-cs-text-main mb-8">
                Everything you need to build and test
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">First 500 statements/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">Full API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">Sandbox environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#006F46] mt-1 flex-shrink-0" size={20} />
                  <span className="text-cs-text-main">Community support</span>
                </li>
              </ul>
              <Link to="/login?mode=signup">
                <button className="w-full bg-[#006F46] hover:bg-[#005a38] text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Get Started Free
                </button>
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