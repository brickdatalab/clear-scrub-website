import { useState } from 'react';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Connect to Supabase in Phase 6
    alert('Thanks for reaching out! We\'ll respond within 24 hours.');
  };

  return (
    <Section background="gray" className="pt-32">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-display mb-4">Get in Touch</h1>
            <p className="text-subhead text-cs-g-500">
              Have questions? We're here to help.
            </p>
          </div>

          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-body font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-body font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-body font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-body font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-cs-g-200 text-center">
              <p className="text-body text-cs-g-500">
                Need help?{' '}
                <a href="/help-center" className="text-cs-accent hover:underline">
                  Visit our Help Center
                </a>
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}