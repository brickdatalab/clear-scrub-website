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

      {/* Section: Developer Experience */}
      <Section background="white" className="bg-cs-intelligence">
        <Container>
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              A Radically Better Developer Experience.
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We obsessed over the DX so you don't have to. Integrate ClearScrub in hours, not weeks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start fade-in-up">
            {/* Feature Descriptions (Left Side) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  Stripe-Quality Documentation
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Access interactive documentation with live API testing capabilities. We believe great DX is the foundation of great products.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  SDKs for Every Stack
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Get started instantly with SDKs in 8 languages: Python, Node.js, Ruby, PHP, Java, Go, C#, and Rust.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  Sandbox and Community
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Test robustly using our sandbox environment with 50+ sample bank statements. Join our Discord community for real-time developer support (moving beyond slow email tickets).
                </p>
              </div>
            </div>
            
            {/* Interactive Code Block (Right Side) */}
            <div className="lg:col-span-7">
              <div className="bg-cs-g-800 rounded-lg overflow-hidden shadow-2xl">
                {/* Language Tabs */}
                <div className="bg-cs-g-900 px-4 py-3 flex gap-4 border-b border-cs-g-700">
                  <button className="px-3 py-1.5 text-sm font-medium text-white bg-cs-intelligence rounded">
                    Python
                  </button>
                  <button className="px-3 py-1.5 text-sm font-medium text-white/60 hover:text-white">
                    Node.js
                  </button>
                  <button className="px-3 py-1.5 text-sm font-medium text-white/60 hover:text-white">
                    Ruby
                  </button>
                  <button className="px-3 py-1.5 text-sm font-medium text-white/60 hover:text-white">
                    Go
                  </button>
                </div>
                
                {/* Code Content */}
                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <div className="text-cs-g-400"># Install the SDK</div>
                  <div className="mt-2">
                    <span className="text-cs-secondary">pip install</span>
                    <span className="text-white"> clearscrub</span>
                  </div>
                  
                  <div className="mt-6 text-cs-g-400"># Process a bank statement</div>
                  <div className="mt-2">
                    <span className="text-purple-400">import</span>
                    <span className="text-white"> clearscrub</span>
                  </div>
                  
                  <div className="mt-4">
                    <span className="text-white">client = clearscrub.</span>
                    <span className="text-cs-secondary">Client</span>
                    <span className="text-white">(api_key=</span>
                    <span className="text-yellow-400">"your_api_key"</span>
                    <span className="text-white">)</span>
                  </div>
                  
                  <div className="mt-4">
                    <span className="text-white">result = client.statements.</span>
                    <span className="text-cs-secondary">process</span>
                    <span className="text-white">(</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-white">file_path=</span>
                    <span className="text-yellow-400">"statement.pdf"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-white">enrichment=</span>
                    <span className="text-purple-400">True</span>
                  </div>
                  <div>
                    <span className="text-white">)</span>
                  </div>
                  
                  <div className="mt-4 text-cs-g-400"># Returns in &lt;5 seconds with enriched data</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section: Platform Extensions */}
      <Section background="gray" className="bg-cs-divider-bg">
        <Container>
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cs-text-headline">
              A Complete Toolkit for Modern Finance.
            </h2>
          </div>
          
          {/* Feature Block 1: Embeddable UI Components */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 fade-in-up">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-cs-primary">
                White-Label & Embeddable UI
              </h3>
              <p className="text-lg text-cs-text-main leading-relaxed">
                Accelerate your time-to-market. Most lenders want branded experiences but hate building custom UIs. We provide pre-built, drop-in React/Vue components for upload and results display. Launch a mobile-first experience with just one line of code.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cs-primary/10 to-cs-secondary/10 rounded-lg p-8 border border-cs-primary/20">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-cs-primary rounded"></div>
                  <div className="text-sm font-semibold text-cs-text-headline">YourLender Portal</div>
                </div>
                <div className="space-y-4">
                  <div className="h-24 bg-cs-g-100 rounded-lg flex items-center justify-center border-2 border-dashed border-cs-g-300">
                    <span className="text-cs-g-500 text-sm">Drop PDF here or click to upload</span>
                  </div>
                  <div className="h-10 bg-cs-primary/10 rounded flex items-center px-4">
                    <div className="text-xs text-cs-primary">statement_2024.pdf</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature Block 2: Integration Marketplace */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-up">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-cs-intelligence/10 to-cs-intelligence/5 rounded-lg p-8 border border-cs-intelligence/20">
                <div className="grid grid-cols-3 gap-4">
                  {['Salesforce', 'HubSpot', 'Zapier', 'Blend', 'Encompass', 'Make'].map((name) => (
                    <div key={name} className="bg-white rounded-lg p-4 flex items-center justify-center shadow-sm">
                      <span className="text-xs font-semibold text-cs-text-headline">{name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-cs-intelligence to-transparent"></div>
                  <div className="h-2 w-2 rounded-full bg-cs-intelligence"></div>
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-cs-intelligence to-transparent"></div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-semibold mb-6 text-cs-intelligence">
                Seamless Connectivity
              </h3>
              <p className="text-lg text-cs-text-main leading-relaxed">
                Connect ClearScrub to your existing workflows. We offer pre-built connectors to the top 20 lending CRMs (Salesforce, HubSpot, Blend, Encompass), no-code automation via Zapier/Make.com, and flexible webhook templates.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section: Compliance and Security */}
      <Section background="white">
        <Container>
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cs-text-headline">
              Compliance-First Architecture.
            </h2>
            <p className="text-xl text-cs-text-main max-w-3xl mx-auto">
              Enterprise-grade security designed for financial services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up">
            {/* Feature 1: SOC 2 Compliance */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-cs-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-cs-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-cs-text-headline">
                SOC 2 Compliance
              </h3>
              <p className="text-cs-text-main leading-relaxed">
                SOC 2 Type II certified from day one. We ensure the highest standards of security and confidentiality.
              </p>
            </div>
            
            {/* Feature 2: Data Residency */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-cs-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-cs-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-cs-text-headline">
                Data Residency
              </h3>
              <p className="text-cs-text-main leading-relaxed">
                Choose your data residency region (US, EU, Canada) to meet local regulatory requirements.
              </p>
            </div>
            
            {/* Feature 3: Privacy by Default */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-cs-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-cs-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-cs-text-headline">
                Privacy by Default
              </h3>
              <p className="text-cs-text-main leading-relaxed">
                Automatic 30-day data deletion policies and comprehensive audit logs of every API call. GDPR/CCPA compliant.
              </p>
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
