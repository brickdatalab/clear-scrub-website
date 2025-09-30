import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { FileText, Repeat, Database, Zap, Link as LinkIcon, Lock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <FileText size={32} />,
      title: "Bank Statement Parsing",
      description: "Extract structured data from any bank PDF. Handles 1000+ bank formats automatically.",
      bullets: [
        "Multi-format support (PDF, CSV, Excel)",
        "OCR for scanned documents",
        "Automatic field detection",
        "Merchant name disambiguation",
        "Category classification",
        "Duplicate detection"
      ]
    },
    {
      icon: <Repeat size={32} />,
      title: "Deep Verification",
      description: "Comprehensive credit risk assessment to identify financial red flags and lending exposure.",
      bullets: [
        "Business loan default history detection",
        "Active bankruptcy status screening",
        "Debt settlement tracking on past obligations"
      ]
    },
    {
      icon: <Database size={32} />,
      title: "Quantum Data™ Append",
      description: "Enrich contact records with verified business data and contact information.",
      bullets: [
        "Phone number verification",
        "Email address lookup",
        "Business profile enrichment"
      ]
    },
    {
      icon: <Zap size={32} />,
      title: "Real-Time Processing",
      description: "Process statements in under 30 seconds with our optimized pipeline.",
      bullets: [
        "Parallel processing",
        "Sub-30 second response times",
        "Batch processing support"
      ]
    },
    {
      icon: <LinkIcon size={32} />,
      title: "CRM Integrations",
      description: "Export clean data directly to your loan origination system or CRM.",
      bullets: [
        "REST API with webhooks",
        "CSV/Excel export",
        "Custom integration support"
      ]
    },
    {
      icon: <Lock size={32} />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with SOC 2 compliance and end-to-end encryption.",
      bullets: [
        "SOC 2 Type II certified",
        "256-bit encryption at rest",
        "Zero data retention policy"
      ]
    }
  ];

  return (
    <>
      <Section background="gray" className="pt-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display mb-6">Everything You Need to Underwrite Faster</h1>
            <p className="text-subhead text-cs-g-500">
              Built-in tools for parsing, normalizing, and enriching financial data. 
              No hidden modules or surprise fees.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="space-y-24">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-cs-accent mb-4">{feature.icon}</div>
                  <h2 className="text-heading mb-4">{feature.title}</h2>
                  <p className="text-body text-cs-g-500 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="text-body text-cs-g-700">• {bullet}</li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-cs-g-100 rounded-2xl h-80 flex items-center justify-center ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}>
                  <p className="text-cs-g-400">[Feature Screenshot]</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}