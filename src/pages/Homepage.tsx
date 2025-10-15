import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { ArrowRight, FileText, RefreshCw, TrendingUp, AlertTriangle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Homepage = () => {
  const heroAnimation = useScrollAnimation();
  const credibilityAnimation = useScrollAnimation();
  const valueAnimation = useScrollAnimation();
  const outcomesAnimation = useScrollAnimation();
  const howItWorksAnimation = useScrollAnimation();
  const sampleOutputAnimation = useScrollAnimation();
  const faqAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const scrollToSampleOutput = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('sample-output');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cs-white overflow-hidden py-24">
        <div className="absolute inset-0 gradient-mesh" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div ref={heroAnimation.ref} className={`max-w-4xl mx-auto text-center scroll-fade-in ${heroAnimation.isVisible ? 'visible' : ''}`}>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-cs-text-headline leading-tight mb-6">
              Clean bank statements. Decision ready data.
            </h1>
            <p className="text-xl text-cs-text-main leading-relaxed mb-8">
              Upload statements. Get structured transactions, cash flow metrics, and risk flags in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <button className="flex items-center justify-center gap-2 bg-cs-primary hover:bg-cs-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl smooth-hover btn-hover">
                  Sign up
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <p className="text-sm text-cs-text-main">Includes 1,000 credits free.</p>
            </div>
            <div className="mt-4">
              <a 
                href="#sample-output" 
                onClick={scrollToSampleOutput}
                className="text-cs-primary hover:underline font-medium"
              >
                See sample output
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="py-8 bg-cs-divider-bg">
        <div className="container mx-auto px-6">
          <div ref={credibilityAnimation.ref} className={`text-center scroll-fade-in ${credibilityAnimation.isVisible ? 'visible' : ''}`}>
            <p className="text-lg text-cs-text-main font-medium">
              Built for lenders, fintechs, and brokers.
            </p>
          </div>
        </div>
      </section>

      {/* Value Summary Section */}
      <section className="py-20 bg-cs-white">
        <div className="container mx-auto px-6">
          <div ref={valueAnimation.ref} className={`scroll-fade-in ${valueAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-cs-text-headline text-center mb-16">
              What ClearScrub delivers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-cs-white p-8 rounded-lg border border-cs-g-200 space-y-4 card-shadow smooth-hover">
                <div className="w-14 h-14 rounded-lg bg-cs-primary/10 flex items-center justify-center">
                  <FileText className="w-7 h-7 text-cs-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-cs-text-headline">Parsing</h3>
                <ul className="space-y-2 text-cs-text-main">
                  <li className="flex items-start gap-2">
                    <span className="text-cs-primary mt-1">•</span>
                    <span>Extract accounts, periods, balances, and transactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cs-primary mt-1">•</span>
                    <span>Works with native and scanned PDFs</span>
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-cs-white p-8 rounded-lg border border-cs-g-200 space-y-4 card-shadow smooth-hover">
                <div className="w-14 h-14 rounded-lg bg-cs-primary/10 flex items-center justify-center">
                  <RefreshCw className="w-7 h-7 text-cs-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-cs-text-headline">Normalization</h3>
                <ul className="space-y-2 text-cs-text-main">
                  <li className="flex items-start gap-2">
                    <span className="text-cs-primary mt-1">•</span>
                    <span>Clean payees and standardize categories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cs-primary mt-1">•</span>
                    <span>Deduplicate across uploads</span>
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-cs-white p-8 rounded-lg border border-cs-g-200 space-y-4 card-shadow smooth-hover">
                <div className="w-14 h-14 rounded-lg bg-cs-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-cs-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-cs-text-headline">Cash flow analytics</h3>
                <ul className="space-y-2 text-cs-text-main">
                  <li className="flex items-start gap-2">
                    <span className="text-cs-primary mt-1">•</span>
                    <span>Average daily balance and days negative</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cs-primary mt-1">•</span>
                    <span>Inflow stability and concentration</span>
                  </li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="bg-cs-white p-8 rounded-lg border border-cs-g-200 space-y-4 card-shadow smooth-hover">
                <div className="w-14 h-14 rounded-lg bg-cs-primary/10 flex items-center justify-center">
                  <AlertTriangle className="w-7 h-7 text-cs-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-cs-text-headline">Risk and fraud signals</h3>
                <ul className="space-y-2 text-cs-text-main">
                  <li className="flex items-start gap-2">
                    <span className="text-cs-primary mt-1">•</span>
                    <span>Inconsistent totals and duplicate pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cs-primary mt-1">•</span>
                    <span>Round-number and synthetic patterns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-cs-divider-bg">
        <div className="container mx-auto px-6">
          <div ref={outcomesAnimation.ref} className={`scroll-fade-in ${outcomesAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-cs-text-headline text-center mb-16">
              Outcomes
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
              <div className="text-center">
                <ul className="space-y-2 text-lg text-cs-text-main">
                  <li className="flex items-start gap-2">
                    <span className="text-cs-primary mt-1">•</span>
                    <span>Faster time to offer</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <ul className="space-y-2 text-lg text-cs-text-main">
                  <li className="flex items-start gap-2">
                    <span className="text-cs-primary mt-1">•</span>
                    <span>Less manual review</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <ul className="space-y-2 text-lg text-cs-text-main">
                  <li className="flex items-start gap-2">
                    <span className="text-cs-primary mt-1">•</span>
                    <span>Better risk control</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-cs-white">
        <div className="container mx-auto px-6">
          <div ref={howItWorksAnimation.ref} className={`scroll-fade-in ${howItWorksAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-cs-text-headline text-center mb-16">
              From PDF to decision
            </h2>
            
            <div className="grid md:grid-cols-5 gap-8">
              {/* Step 1 */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cs-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-cs-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-cs-text-headline">Ingest</h3>
                <p className="text-cs-text-main">Upload via dashboard or API</p>
              </div>

              {/* Step 2 */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cs-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-cs-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-cs-text-headline">Parse</h3>
                <p className="text-cs-text-main">Extract transactions and statement data</p>
              </div>

              {/* Step 3 */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cs-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-cs-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-cs-text-headline">Normalize</h3>
                <p className="text-cs-text-main">Clean payees, map categories, remove duplicates</p>
              </div>

              {/* Step 4 */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cs-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-cs-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold text-cs-text-headline">Analyze</h3>
                <p className="text-cs-text-main">Compute cash flow metrics and risk flags</p>
              </div>

              {/* Step 5 */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cs-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-cs-primary">5</span>
                </div>
                <h3 className="text-xl font-semibold text-cs-text-headline">Deliver</h3>
                <p className="text-cs-text-main">Export JSON, CSV, Excel or receive via webhook</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Output Section */}
      <section id="sample-output" className="py-20 bg-cs-divider-bg">
        <div className="container mx-auto px-6">
          <div ref={sampleOutputAnimation.ref} className={`scroll-fade-in ${sampleOutputAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-cs-text-headline text-center mb-8">
              See sample output
            </h2>
            <p className="text-xl text-cs-text-main text-center max-w-3xl mx-auto mb-12">
              A trimmed JSON example of the data your team can consume.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#292929] p-6 rounded-lg font-mono text-sm overflow-x-auto card-shadow">
                <pre className="text-cs-white">
                  <code>{`{
  "account": {
    "holder": "Acme LLC",
    "last4": "1234",
    "currency": "USD"
  },
  "period": {
    "start": "2025-06-01",
    "end": "2025-08-31"
  },
  "metrics": {
    "avg_daily_balance": 18452.75,
    "days_negative": 3,
    "nsf_count": 1,
    "inflow_stability_index": 0.82,
    "true_revenue_estimate": 124350.00
  },
  "transactions": [
    {
      "date": "2025-08-03",
      "amount": -124.17,
      "type": "debit",
      "payee": "Stripe",
      "category": "card_fees"
    },
    {
      "date": "2025-08-05",
      "amount": 8250.00,
      "type": "credit",
      "payee": "Shopify Payout",
      "category": "sales"
    }
  ],
  "flags": [
    {
      "type": "tamper_inconsistent_total",
      "severity": "high"
    },
    {
      "type": "duplicate_page",
      "page": 4,
      "severity": "medium"
    }
  ]
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cs-white">
        <div className="container mx-auto px-6">
          <div ref={faqAnimation.ref} className={`scroll-fade-in ${faqAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-cs-text-headline text-center mb-16">
              FAQs
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Q1 */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-cs-text-headline">
                  What files are supported?
                </h3>
                <p className="text-lg text-cs-text-main">
                  PDF bank and credit card statements.
                </p>
              </div>

              {/* Q2 */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-cs-text-headline">
                  What formats can I export?
                </h3>
                <p className="text-lg text-cs-text-main">
                  JSON, CSV, and Excel. API and webhooks are available.
                </p>
              </div>

              {/* Q3 */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-cs-text-headline">
                  How do credits work?
                </h3>
                <p className="text-lg text-cs-text-main">
                  Your account includes 1,000 credits to process statements. Credits are consumed when you process files.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-20 bg-cs-primary">
        <div className="container mx-auto px-6">
          <div ref={ctaAnimation.ref} className={`text-center scroll-fade-in ${ctaAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Start processing statements now
            </h2>
            <div className="flex flex-col items-center gap-4">
              <Link to="/signup">
                <button className="flex items-center justify-center gap-2 bg-white text-cs-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl smooth-hover btn-hover">
                  Sign up
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <p className="text-sm text-white/90">Includes 1,000 credits free.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
