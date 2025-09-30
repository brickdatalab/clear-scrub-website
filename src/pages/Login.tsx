import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../integrations/supabase/client';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Label } from '../components/ui/label';

export default function Login() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        // Sign up validation
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }

        if (formData.password.length < 6) {
          setError('Password must be at least 6 characters');
          setLoading(false);
          return;
        }

        // Sign up with Supabase
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              name: formData.name,
            },
          },
        });

        if (signUpError) throw signUpError;

        if (data.user) {
          // Check if email confirmation is required
          if (data.user.identities && data.user.identities.length === 0) {
            setError('An account with this email already exists');
          } else {
            alert('Account created! Please check your email to verify your account.');
            setIsSignUp(false);
            setFormData({ name: '', email: '', password: '', confirmPassword: '' });
          }
        }
      } else {
        // Sign in with Supabase
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (signInError) throw signInError;

        if (data.user) {
          // Redirect to dashboard page
          navigate('/dashboard');
        }
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section background="white" className="pt-32 min-h-screen flex items-center">
      <Container>
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-display mb-3">
              {isSignUp ? 'Create Your Account' : 'Welcome Back'}
            </h1>
            <p className="text-body text-cs-g-500">
              {isSignUp 
                ? 'Start processing bank statements in seconds' 
                : 'Sign in to access your dashboard'}
            </p>
          </div>

          <Card className="shadow-lg min-h-[600px]">
            {/* Tabs */}
            <div className="flex gap-1 mb-8 p-1 bg-cs-g-100 rounded-lg">
              <button
                onClick={() => {
                  setIsSignUp(false);
                  setError('');
                }}
                className={`flex-1 py-2.5 px-4 rounded-md font-medium transition-all ${
                  !isSignUp 
                    ? 'bg-cs-white text-cs-accent shadow-sm' 
                    : 'text-cs-g-500 hover:text-cs-g-700'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setIsSignUp(true);
                  setError('');
                }}
                className={`flex-1 py-2.5 px-4 rounded-md font-medium transition-all ${
                  isSignUp 
                    ? 'bg-cs-white text-cs-accent shadow-sm' 
                    : 'text-cs-g-500 hover:text-cs-g-700'
                }`}
              >
                Sign Up
              </button>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {isSignUp && (
                <div>
                  <Label htmlFor="name" className="text-cs-g-700">Full Name</Label>
                  <input
                    id="name"
                    type="text"
                    required={isSignUp}
                    disabled={loading}
                    className="w-full px-4 py-3 mt-1.5 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              )}

              <div>
                <Label htmlFor="email" className="text-cs-g-700">Email Address</Label>
                <input
                  id="email"
                  type="email"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 mt-1.5 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent focus:border-transparent transition-all disabled:opacity-50"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-cs-g-700">Password</Label>
                <input
                  id="password"
                  type="password"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 mt-1.5 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent focus:border-transparent transition-all disabled:opacity-50"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>

              {isSignUp && (
                <div>
                  <Label htmlFor="confirmPassword" className="text-cs-g-700">Confirm Password</Label>
                  <input
                    id="confirmPassword"
                    type="password"
                    required={isSignUp}
                    disabled={loading}
                    className="w-full px-4 py-3 mt-1.5 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  />
                </div>
              )}

              {!isSignUp && (
                <div className="text-right">
                  <button type="button" className="text-cs-accent hover:underline text-sm font-medium">
                    Forgot password?
                  </button>
                </div>
              )}

              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="w-full mt-6"
                disabled={loading}
              >
                {loading ? 'Loading...' : (isSignUp ? 'Create Account' : 'Sign In')}
              </Button>
            </form>

            {isSignUp && (
              <p className="mt-6 text-sm text-center text-cs-g-500">
                By signing up, you agree to our{' '}
                <a href="/terms" className="text-cs-accent hover:underline font-medium">Terms of Service</a>
              </p>
            )}
          </Card>
        </div>
      </Container>
    </Section>
  );
}
