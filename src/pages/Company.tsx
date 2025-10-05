import { Section } from '../components/Section';
import { Container } from '../components/Container';

export default function Company() {
  return (
    <>
      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-cs-text-headline">
              Redefining the Economics of Data Extraction.
            </h1>
            
            <div className="space-y-6 text-lg text-cs-text-main leading-relaxed">
              <p>
                We built ClearScrub.io because the financial data market needed a better approach—one that combines speed, intelligence, and accessibility.
              </p>
              
              <p>
                The industry has historically been dominated by two types of providers:
              </p>
              
              <p>
                First, the <strong className="text-cs-text-headline">legacy technology providers</strong> who pioneered rapid PDF conversion but haven't evolved their platforms for modern intelligence needs.
              </p>
              
              <p>
                Second, the <strong className="text-cs-text-headline">workflow automation platforms</strong>. We observed that these newer entrants often rely heavily on the technology of the legacy providers, acting essentially as intermediaries. They wrap existing parsing engines in complex software and charge a significant premium for the integration.
              </p>
              
              <p>
                This approach creates friction, increases costs, and slows down innovation.
              </p>
              
              <p className="pt-6 text-xl font-semibold text-cs-text-headline">
                ClearScrub offers a third way: Fast Intelligence.
              </p>
              
              <p>
                We provide a modern, AI-powered extraction engine with the speed of the legacy systems, the intelligence of the workflow platforms, and a radically superior developer experience. Our mission is to make data extraction accessible, affordable, and easy to implement.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission Section */}
      <Section background="gray" className="bg-cs-divider-bg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-cs-text-headline">
              Our Mission
            </h2>
            
            <div className="space-y-6 text-lg text-cs-text-main leading-relaxed">
              <p>
                To democratize access to financial intelligence by providing developers with the tools they need to build better products, faster.
              </p>
              
              <p>
                We believe that the future of financial services depends on developers having access to high-quality, affordable infrastructure. That's why we've built ClearScrub with a developer-first approach, focusing on:
              </p>
              
              <ul className="space-y-3 ml-6 list-disc">
                <li><strong className="text-cs-text-headline">Speed</strong> - Sub-5 second processing times that enable real-time decision making</li>
                <li><strong className="text-cs-text-headline">Intelligence</strong> - AI-powered enrichment that goes beyond raw data extraction</li>
                <li><strong className="text-cs-text-headline">Transparency</strong> - Confidence scores and human-in-the-loop verification when you need it</li>
                <li><strong className="text-cs-text-headline">Accessibility</strong> - Usage-based pricing that scales with your business</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-cs-text-headline">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-cs-primary">
                  Developer First
                </h3>
                <p className="text-cs-text-main leading-relaxed">
                  We obsess over the developer experience because we believe that great products start with great tools. Every decision we make is viewed through the lens of developer productivity.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-cs-primary">
                  Radical Transparency
                </h3>
                <p className="text-cs-text-main leading-relaxed">
                  Black-box algorithms erode trust. We provide granular confidence scores, detailed documentation, and clear pricing so you always know what you're getting.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-cs-primary">
                  Fair Pricing
                </h3>
                <p className="text-cs-text-main leading-relaxed">
                  We believe in usage-based pricing that scales with your business. No hidden fees, no contracts, no middleman markup—just transparent, predictable costs.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-cs-primary">
                  Innovation Without Compromise
                </h3>
                <p className="text-cs-text-main leading-relaxed">
                  We leverage the latest AI technology while maintaining the speed and reliability that financial services demand. Fast Intelligence isn't just a tagline—it's our promise.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
