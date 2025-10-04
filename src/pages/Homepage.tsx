import { Link } from 'react-router-dom';
import { Zap, Brain, DollarSign, Gauge } from 'lucide-react';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Card } from '../components/Card';

export default function Homepage() {
  return (
    <>
      {/* Hero Section with Stripe Effect */}
      <Section background="white" className="min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Content (60%) */}
            <div className="lg:col-span-7 fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-cs-text-headline">
                AI-Powered Infrastructure for Financial Data.
              </h1>
              <p className="text-xl text-cs-text-main mb-8 leading-relaxed max-w-2xl">
                ClearScrub delivers "Fast Intelligence": the processing speed of legacy converters 
                combined with the insights of modern AI enrichment. Process bank statements in seconds, 
                categorize transactions, and access business intelligence through our radically simple 
                API platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <button className="font-sans font-semibold px-8 py-4 text-lg text-white bg-cs-primary rounded-md hover:bg-cs-primary/90 transition-all duration-300 shadow-md hover:shadow-lg">
                    Start Now →
                  </button>
                </Link>
                <a 
                  href="https://docs.clearscrub.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-sans font-semibold px-8 py-4 text-lg text-cs-intelligence hover:text-cs-intelligence/80 transition-colors flex items-center justify-center"
                >
                  Explore the Docs →
                </a>
              </div>
            </div>
            
            {/* Right: Visualization (40%) */}
            <div className="lg:col-span-5 fade-in-up">
              <div className="relative">
                {/* Technical visualization */}
                <div className="bg-gradient-to-br from-cs-intelligence/10 to-cs-intelligence/5 rounded-lg p-8 border border-cs-intelligence/20 shadow-xl backdrop-blur-sm">
                  <div className="space-y-4">
                    {/* API Response Mockup */}
                    <div className="font-mono text-sm">
                      <div className="text-cs-intelligence/70">// API Response</div>
                      <div className="mt-2 space-y-1">
                        <div><span className="text-cs-intelligence">status</span>: <span className="text-cs-secondary">"processed"</span>,</div>
                        <div><span className="text-cs-intelligence">processing_time</span>: <span className="text-cs-secondary">"2.4s"</span>,</div>
                        <div><span className="text-cs-intelligence">transactions</span>: <span className="text-cs-secondary">247</span>,</div>
                        <div><span className="text-cs-intelligence">intelligence_score</span>: <span className="text-cs-secondary">98.6</span></div>
                      </div>
                    </div>
                    
                    {/* Data Flow Visualization */}
                    <div className="flex items-center gap-3 pt-4">
                      <div className="h-2 w-2 rounded-full bg-cs-secondary animate-pulse" />
                      <div className="h-0.5 flex-1 bg-gradient-to-r from-cs-secondary to-cs-intelligence" />
                      <div className="h-2 w-2 rounded-full bg-cs-intelligence animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section: The Problem with Status Quo */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-cs-text-headline">
              The Evolution of Data Extraction.
            </h2>
            <p className="text-lg text-cs-text-main leading-relaxed">
              The financial services industry has long relied on established infrastructure for PDF conversion. 
              While some providers optimized for speed, they lacked intelligent analysis. Others attempted to 
              add intelligence by simply rebranding that same legacy infrastructure, adding complex workflows, 
              and charging a significant premium—acting as expensive middlemen.
            </p>
            <p className="text-lg text-cs-text-main leading-relaxed mt-6 font-semibold">
              ClearScrub breaks this mold. We built a modern, AI-native platform that delivers both 
              lightning-fast processing and deep financial intelligence, without the markup.
            </p>
          </div>
        </Container>
      </Section>

      {/* Section: Fast Intelligence Platform */}
      <Section background="gray" className="bg-cs-divider-bg">
        <Container>
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cs-text-headline">
              Fast Intelligence. Radically Simple Adoption.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up">
            {/* Column 1: Speed */}
            <Card hover className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-cs-primary/10 rounded-full flex items-center justify-center">
                  <Gauge className="text-cs-primary" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-cs-text-headline">
                Optimized for Speed
              </h3>
              <p className="text-cs-text-main leading-relaxed">
                Our streamlined infrastructure processes statements in under 5 seconds, enabling 
                real-time underwriting. We match the speed of the fastest legacy systems while 
                eliminating the 1-4 minute delays common in workflow-heavy platforms.
              </p>
            </Card>
            
            {/* Column 2: AI */}
            <Card hover className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-cs-primary/10 rounded-full flex items-center justify-center">
                  <Brain className="text-cs-primary" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-cs-text-headline">
                Beyond Raw Data
              </h3>
              <p className="text-cs-text-main leading-relaxed">
                We don't just extract data; we enrich it. Our AI engine provides intelligent 
                categorization and merchant enrichment (logos, URLs, industry benchmarks) without 
                requiring a live banking connection.
              </p>
            </Card>
            
            {/* Column 3: Pricing */}
            <Card hover className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-cs-primary/10 rounded-full flex items-center justify-center">
                  <DollarSign className="text-cs-primary" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-cs-text-headline">
                Usage-Based and Affordable
              </h3>
              <p className="text-cs-text-main leading-relaxed">
                A transparent, pay-as-you-go model that is significantly more affordable than 
                competitors. No setup fees, no minimums, and no annual contracts.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Section: Hybrid AI and Transparency */}
      <Section background="white">
        <Container>
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cs-text-headline">
              Transparent AI: The Hybrid Intelligence Model.
            </h2>
            <p className="text-xl text-cs-text-main max-w-3xl mx-auto">
              Black-box algorithms erode trust. Our Hybrid AI architecture provides unparalleled 
              transparency and accuracy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start fade-in-up">
            {/* Feature 1: Confidence Scoring */}
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-cs-text-headline">
                Granular Confidence Metrics
              </h3>
              <p className="text-lg text-cs-text-main mb-8 leading-relaxed">
                Utilizing sophisticated probabilistic models, ClearScrub assigns a precise confidence 
                score (0-100%) to every single extracted field. This provides full transparency into 
                the AI's decision-making process, allowing you to automate based on your risk tolerance.
              </p>
              
              {/* JSON Visualization */}
              <div className="bg-gradient-to-br from-cs-intelligence/5 to-cs-intelligence/10 rounded-lg p-6 border border-cs-intelligence/20 font-mono text-sm">
                <div className="space-y-2">
                  <div className="text-cs-intelligence/70">{'{'}</div>
                  <div className="ml-4">
                    <span className="text-cs-intelligence">"merchant"</span>: 
                    <span className="text-cs-text-main"> "Starbucks"</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-cs-intelligence">"amount"</span>: 
                    <span className="text-cs-text-main"> 4.50</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-cs-intelligence">"confidence_score"</span>: 
                    <span className="text-cs-secondary font-semibold"> 99.8</span>
                  </div>
                  <div className="text-cs-intelligence/70">{'}'}</div>
                </div>
              </div>
            </div>
            
            {/* Feature 2: Human Verification */}
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-cs-text-headline">
                Dynamic Review Queues (HITL)
              </h3>
              <p className="text-lg text-cs-text-main mb-8 leading-relaxed">
                Configure thresholds to automatically route low-confidence results to a human review 
                queue. You can manage the review internally via our dashboard, or leverage our secure, 
                crowdsourced review platform for guaranteed accuracy.
              </p>
              
              {/* Visual representation */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-cs-divider-bg rounded-lg border border-cs-g-200">
                  <div className="h-3 w-3 rounded-full bg-cs-secondary" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-cs-text-headline">High Confidence (≥95%)</div>
                    <div className="text-sm text-cs-text-main">Auto-approved</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-cs-divider-bg rounded-lg border border-cs-g-200">
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-cs-text-headline">Medium Confidence (80-95%)</div>
                    <div className="text-sm text-cs-text-main">Flagged for review</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-cs-divider-bg rounded-lg border border-cs-g-200">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-cs-text-headline">Low Confidence (&lt;80%)</div>
                    <div className="text-sm text-cs-text-main">Required human verification</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section background="white" className="border-t border-cs-g-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cs-text-headline">
              Ready to implement Fast Intelligence?
            </h2>
            <p className="text-xl text-cs-text-main mb-8">
              Experience radically better technology with transparent, usage-based pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <button className="font-sans font-semibold px-8 py-4 text-lg text-white bg-cs-primary rounded-md hover:bg-cs-primary/90 transition-all duration-300 shadow-md hover:shadow-lg">
                  Get Started Free →
                </button>
              </Link>
              <Link to="/contact">
                <button className="font-sans font-semibold px-8 py-4 text-lg text-cs-text-main border-2 border-cs-g-300 rounded-md hover:border-cs-primary hover:text-cs-primary transition-all duration-300">
                  Contact Sales →
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
