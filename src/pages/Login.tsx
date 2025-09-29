import { useState } from 'react';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isSignUp ? 'Sign up' : 'Sign in', formData);
    // TODO: Connect to Supabase auth in Phase 6
    alert('Auth will be connected in Phase 6!');
  };

  return (
    <Section background="gray" className="pt-32 min-h-screen flex items-center">
      <Container>
        <div className="max-w-md mx-auto">
          <Card>
            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-cs-g-200">
              <button
                onClick={() => setIsSignUp(false)}
                className={`pb-3 px-4 font-medium transition-colors ${
                  !isSignUp 
                    ? 'text-cs-accent border-b-2 border-cs-accent' 
                    : 'text-cs-g-500'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsSignUp(true)}
                className={`pb-3 px-4 font-medium transition-colors ${
                  isSignUp 
                    ? 'text-cs-accent border-b-2 border-cs-accent' 
                    : 'text-cs-g-500'
                }`}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <div>
                  <label className="block text-body font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required={isSignUp}
                    className="w-full px-4 py-3 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              )}

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
                <label className="block text-body font-medium mb-2">Password</label>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>

              {isSignUp && (
                <div>
                  <label className="block text-body font-medium mb-2">Confirm Password</label>
                  <input
                    type="password"
                    required={isSignUp}
                    className="w-full px-4 py-3 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  />
                </div>
              )}

              {!isSignUp && (
                <div className="text-right">
                  <button type="button" className="text-cs-accent hover:underline text-sm">
                    Forgot password?
                  </button>
                </div>
              )}

              <Button type="submit" variant="primary" size="lg" className="w-full">
                {isSignUp ? 'Create Account' : 'Sign In'}
              </Button>
            </form>

            {isSignUp && (
              <p className="mt-6 text-sm text-center text-cs-g-500">
                By signing up, you agree to our{' '}
                <a href="/terms" className="text-cs-accent hover:underline">Terms of Service</a>
              </p>
            )}
          </Card>
        </div>
      </Container>
    </Section>
  );
}