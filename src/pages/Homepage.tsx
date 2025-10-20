import { Button } from "@/components/Button";
import { ArrowRight, Zap, Brain, DollarSign, Shield, Globe, Lock, Code, Sparkles } from "lucide-react";
import { InteractiveCodeBlock } from "@/components/InteractiveCodeBlock";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const Homepage = () => {
  const heroAnimation = useScrollAnimation();
  const problemAnimation = useScrollAnimation();
  const fastIntelAnimation = useScrollAnimation();
  const hybridAiAnimation = useScrollAnimation();
  const dxAnimation = useScrollAnimation();
  const platformAnimation = useScrollAnimation();
  const complianceAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();
  const [typedText, setTypedText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullText = `"status": "processed",
"processing_time": "2.4s",
"transactions": 247,
"intelligence_score": 98.6`;
  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setTypedText(fullText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => {
      clearInterval(typingInterval);
      clearInterval(progressInterval);
    };
  }, []);
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cs-white overflow-hidden py-24">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 gradient-mesh" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div ref={heroAnimation.ref} className={`grid lg:grid-cols-2 gap-12 items-center scroll-fade-in ${heroAnimation.isVisible ? 'visible' : ''}`}>
            {/* Left Side - Text & CTAs */}
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-extrabold text-cs-text-headline leading-tight">Clean bank statements for Decision ready data.</h1>
              <p className="text-xl text-cs-text-main leading-relaxed">ClearScrub delivers state-of-the-art AI intelligence for bank statements and the processing accuracy of legacy converters. Process bank statements in seconds, categorize transactions, and access business intelligence through our radically simple API platform and AI enrichment</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login?tab=signup" className="flex items-center justify-center gap-2 bg-cs-primary hover:bg-cs-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl smooth-hover btn-hover">
                  Start Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="flex items-center justify-center gap-2 bg-white border-2 border-cs-intelligence text-cs-intelligence hover:bg-cs-intelligence/5 px-8 py-4 text-lg font-semibold rounded-xl smooth-hover btn-hover">
                  Explore the Docs
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Side - Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cs-intelligence/10 to-cs-intelligence/5 rounded-lg p-8 border border-cs-intelligence/20 card-shadow backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="font-mono text-sm min-h-[120px]">
                    <div className="text-cs-intelligence/70">// API Response</div>
                    <div className="mt-2 space-y-1">
                      <pre className="whitespace-pre-wrap">
                        {typedText.split('\n').map((line, i) => {
                        const [key, value] = line.split(': ');
                        return <div key={i}>
                              {key && <span style={{
                            color: '#2C14C4'
                          }}>{key}</span>}
                              {value && <>: <span className="text-cs-secondary">{value}</span></>}
                            </div>;
                      })}
                        <span className="inline-block w-2 h-4 bg-cs-intelligence/70 animate-pulse ml-0.5" />
                      </pre>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-4">
                    <div className="h-2 w-2 rounded-full bg-cs-secondary animate-pulse" />
                    <div className="h-0.5 flex-1 bg-cs-divider-bg rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cs-secondary to-cs-intelligence transition-all duration-300" style={{
                      width: `${progress}%`
                    }} />
                    </div>
                    <div className="h-2 w-2 rounded-full bg-cs-intelligence animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Problem with Status Quo */}
      <section className="py-20 bg-cs-white">
        <div className="container mx-auto px-6">
          <div ref={problemAnimation.ref} className={`max-w-4xl mx-auto text-center space-y-6 scroll-fade-in ${problemAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-cs-text-headline">The Evolution of Banking Data Extraction</h2>
            <p className="text-lg text-cs-text-main leading-relaxed">
              The financial services industry has long relied on established infrastructure for PDF conversion. While some providers optimized for speed, they lacked intelligent analysis. <strong>Others attempted to add intelligence by simply rebranding that same legacy infrastructure, adding complex workflows, and charging a significant premium—acting as expensive middlemen.</strong>
            </p>
            <p className="text-lg text-cs-text-main leading-relaxed">
              ClearScrub breaks this mold. We built a modern, AI-native platform that delivers both lightning-fast processing and deep financial intelligence, without the markup.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Fast Intelligence Platform */}
      <section className="py-20 bg-cs-divider-bg">
        <div className="container mx-auto px-6">
          <div ref={fastIntelAnimation.ref} className={`text-center mb-16 scroll-fade-in ${fastIntelAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-cs-text-headline">Fast Intelligence. Radically Simple Adoption.</h2>
          </div>
          
          <div className={`grid md:grid-cols-3 gap-8 scroll-fade-in ${fastIntelAnimation.isVisible ? 'visible' : ''}`} style={{
          transitionDelay: '0.1s'
        }}>
            {/* Column 1 */}
            <div className="bg-cs-white p-8 rounded-lg space-y-4 card-shadow smooth-hover">
              <div className="w-14 h-14 rounded-lg bg-cs-primary/10 flex items-center justify-center">
                <Zap className="w-7 h-7 text-cs-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-cs-text-headline">Optimized for Speed</h3>
              <p className="text-cs-text-main leading-relaxed">
                Our streamlined infrastructure processes statements in under 5 seconds, enabling real-time underwriting. We match the speed of the fastest legacy systems while eliminating the 1-4 minute delays common in workflow-heavy platforms.
              </p>
            </div>

            {/* Column 2 */}
            <div className="bg-cs-white p-8 rounded-lg space-y-4 card-shadow smooth-hover">
              <div className="w-14 h-14 rounded-lg bg-cs-primary/10 flex items-center justify-center">
                <Brain className="w-7 h-7 text-cs-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-cs-text-headline">Beyond Raw Data</h3>
              <p className="text-cs-text-main leading-relaxed">
                We don't just extract data; we enrich it. Our AI engine provides intelligent categorization and merchant enrichment (logos, URLs, industry benchmarks) without requiring a live banking connection.
              </p>
            </div>

            {/* Column 3 */}
            <div className="bg-cs-white p-8 rounded-lg space-y-4 card-shadow smooth-hover">
              <div className="w-14 h-14 rounded-lg bg-cs-primary/10 flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-cs-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-cs-text-headline">Usage-Based and Affordable</h3>
              <p className="text-cs-text-main leading-relaxed">
                A transparent, pay-as-you-go model that is significantly more affordable than competitors. No setup fees, no minimums, and no annual contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Hybrid AI and Transparency */}
      <section className="py-20 bg-cs-white">
        <div className="container mx-auto px-6">
          <div ref={hybridAiAnimation.ref} className={`text-center mb-16 scroll-fade-in ${hybridAiAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-cs-text-headline">
              Transparent AI: The Hybrid Intelligence Model.
            </h2>
            <p className="text-xl text-cs-text-main max-w-3xl mx-auto mt-4">
              Black-box algorithms erode trust. Our Hybrid AI architecture provides unparalleled transparency and accuracy.
            </p>
          </div>
          
          <div className={`grid md:grid-cols-2 gap-12 items-start scroll-fade-in ${hybridAiAnimation.isVisible ? 'visible' : ''}`} style={{
          transitionDelay: '0.1s'
        }}>
            {/* Feature 1: Confidence Scoring */}
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-cs-text-headline">Granular Confidence Metrics</h3>
              <p className="text-lg text-cs-text-main leading-relaxed">
                Utilizing sophisticated probabilistic models, ClearScrub assigns a precise confidence score (0-100%) to every single extracted field. This provides full transparency into the AI's decision-making process, allowing you to automate based on your risk tolerance.
              </p>
              
              {/* JSON Visualization */}
              <div className="bg-[#292929] p-6 rounded-lg font-mono text-sm card-shadow">
                <pre className="text-cs-white">
                  <code>
                    {`{
  `}<span style={{
                    color: '#09B878'
                  }}>"merchant"</span>{`: "Starbucks",
  `}<span style={{
                    color: '#09B878'
                  }}>"amount"</span>{`: 4.50,
  `}<span style={{
                    color: '#09B878'
                  }}>"confidence_score"</span>{`: 99.8
}`}
                  </code>
                </pre>
              </div>
            </div>

            {/* Feature 2: Human Verification */}
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-cs-text-headline">Dynamic Review Queues (HITL)</h3>
              <p className="text-lg text-cs-text-main leading-relaxed">
                Configure thresholds to automatically route low-confidence results to a human review queue. You can manage the review internally via our dashboard, or leverage our secure, crowdsourced review platform for guaranteed accuracy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-cs-divider-bg rounded-lg card-shadow">
                  <div className="h-3 w-3 rounded-full bg-cs-secondary" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-cs-text-headline">High Confidence (≥95%)</div>
                    <div className="text-sm text-cs-text-main">Auto-approved</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-cs-divider-bg rounded-lg card-shadow">
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-cs-text-headline">Medium Confidence (80-95%)</div>
                    <div className="text-sm text-cs-text-main">Flagged for review</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-cs-divider-bg rounded-lg card-shadow">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-cs-text-headline">Low Confidence (&lt;80%)</div>
                    <div className="text-sm text-cs-text-main">Required human verification</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Developer Experience (DX) */}
      <section className="py-20" style={{
      backgroundColor: '#2C14C4'
    }}>
        <div className="container mx-auto px-6">
          <div ref={dxAnimation.ref} className={`text-center mb-12 scroll-fade-in ${dxAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white">A Radically Better Experience.</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mt-4">We obsessed over the DX so you don't have to. Integrate ClearScrub in minutes, not weeks.</p>
          </div>
          
          <div className={`grid lg:grid-cols-5 gap-12 items-start scroll-fade-in ${dxAnimation.isVisible ? 'visible' : ''}`} style={{
          transitionDelay: '0.1s'
        }}>
            {/* Left Side - Feature Descriptions */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Code className="w-8 h-8 text-cs-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Quality Documentation</h3>
                    <p className="text-white/80">Access interactive documentation with live API testing capabilities. We believe great DX is the foundation of great products.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 text-cs-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">SDKs for Every Stack</h3>
                    <p className="text-white/80">Get started instantly with SDKs in 8 languages: Python, Node.js, Ruby, PHP, Java, Go, C#, and Rust.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-cs-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Sandbox and Community</h3>
                    <p className="text-white/80">Test robustly using our sandbox environment with 50+ sample bank statements.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Interactive Code Block */}
            <div className="lg:col-span-3">
              <InteractiveCodeBlock />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Platform Extensions */}
      <section className="py-20 bg-cs-divider-bg">
        <div className="container mx-auto px-6">
          <div ref={platformAnimation.ref} className={`text-center mb-16 scroll-fade-in ${platformAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-cs-text-headline">
              A Complete Toolkit for Modern Finance.
            </h2>
          </div>
          
          <div className={`space-y-20 scroll-fade-in ${platformAnimation.isVisible ? 'visible' : ''}`} style={{
          transitionDelay: '0.1s'
        }}>
            {/* Feature Block 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold" style={{
                color: '#006F46'
              }}>White-Label & Embeddable UI</h3>
                <p className="text-lg text-cs-text-main leading-relaxed">
                  Accelerate your time-to-market. Most lenders want branded experiences but hate building custom UIs. We provide pre-built, drop-in React/Vue components for upload and results display. Launch a mobile-first experience with just one line of code.
                </p>
              </div>
              <div className="bg-cs-white p-8 rounded-lg card-shadow">
                <div className="aspect-video bg-cs-g-100 rounded-lg flex items-center justify-center">
                  <p className="text-cs-g-500 text-sm">[Mobile Upload Portal Mockup]</p>
                </div>
              </div>
            </div>

            {/* Feature Block 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-cs-white p-8 rounded-lg order-2 md:order-1 card-shadow">
                <div className="aspect-video bg-cs-g-100 rounded-lg flex items-center justify-center">
                  <p className="text-cs-g-500 text-sm">[Integration Marketplace Visual]</p>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-3xl font-semibold" style={{
                color: '#2C14C4'
              }}>Seamless Connectivity</h3>
                <p className="text-lg text-cs-text-main leading-relaxed">
                  Connect ClearScrub to your existing workflows. We offer pre-built connectors to the top 20 lending CRMs (Salesforce, HubSpot, Blend, Encompass), no-code automation via Zapier/Make.com, and flexible webhook templates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Compliance and Security */}
      <section className="py-20 bg-cs-white">
        <div className="container mx-auto px-6">
          <div ref={complianceAnimation.ref} className={`text-center mb-16 scroll-fade-in ${complianceAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-cs-text-headline">
              Compliance-First Architecture.
            </h2>
            <p className="text-xl text-cs-text-main max-w-3xl mx-auto mt-4">
              Enterprise-grade security designed for financial services.
            </p>
          </div>
          
          <div className={`grid md:grid-cols-3 gap-8 scroll-fade-in ${complianceAnimation.isVisible ? 'visible' : ''}`} style={{
          transitionDelay: '0.1s'
        }}>
            <div className="p-8 bg-cs-divider-bg rounded-lg space-y-4 card-shadow smooth-hover">
              <div className="w-14 h-14 rounded-lg bg-cs-primary/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-cs-primary" />
              </div>
              <h3 className="text-xl font-semibold text-cs-text-headline">SOC 2 Compliance</h3>
              <p className="text-cs-text-main">SOC 2 Type II certified from day one. We ensure the highest standards of security and confidentiality.</p>
            </div>

            <div className="p-8 bg-cs-divider-bg rounded-lg space-y-4 card-shadow smooth-hover">
              <div className="w-14 h-14 rounded-lg bg-cs-primary/10 flex items-center justify-center">
                <Globe className="w-7 h-7 text-cs-primary" />
              </div>
              <h3 className="text-xl font-semibold text-cs-text-headline">Data Residency</h3>
              <p className="text-cs-text-main">Choose your data residency region (US, EU, Canada) to meet local regulatory requirements.</p>
            </div>

            <div className="p-8 bg-cs-divider-bg rounded-lg space-y-4 card-shadow smooth-hover">
              <div className="w-14 h-14 rounded-lg bg-cs-primary/10 flex items-center justify-center">
                <Lock className="w-7 h-7 text-cs-primary" />
              </div>
              <h3 className="text-xl font-semibold text-cs-text-headline">Privacy by Default</h3>
              <p className="text-cs-text-main">Automatic 30-day data deletion policies and comprehensive audit logs of every API call. GDPR/CCPA compliant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-cs-white">
        <div className="container mx-auto px-6">
          <div ref={ctaAnimation.ref} className={`text-center space-y-8 max-w-3xl mx-auto scroll-fade-in ${ctaAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-cs-text-headline">
              Ready to implement Fast Intelligence?
            </h2>
            <p className="text-xl text-cs-text-main">
              Experience radically better technology with transparent, usage-based pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-cs-primary hover:bg-cs-primary/90 text-white px-8 py-6 text-lg smooth-hover btn-hover">
                Get Started Free <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg smooth-hover">
                Contact Sales <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Homepage;