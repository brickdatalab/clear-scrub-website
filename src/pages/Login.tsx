import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../integrations/supabase/client';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

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
    <Section background="gray" className="pt-32 min-h-screen flex items-center">
      <Container>
        <div className="max-w-md mx-auto">
          <Card>
            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-cs-g-200">
              <button
                onClick={() => {
                  setIsSignUp(false);
                  setError('');
                }}
                className={`pb-3 px-4 font-medium transition-colors ${
                  !isSignUp 
                    ? 'text-cs-accent border-b-2 border-cs-accent' 
                    : 'text-cs-g-500'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setIsSignUp(true);
                  setError('');
                }}
                className={`pb-3 px-4 font-medium transition-colors ${
                  isSignUp 
                    ? 'text-cs-accent border-b-2 border-cs-accent' 
                    : 'text-cs-g-500'
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

            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <div>
                  <label className="block text-body font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required={isSignUp}
                    disabled={loading}
                    className="w-full px-4 py-3 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent disabled:opacity-50"
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
                  disabled={loading}
                  className="w-full px-4 py-3 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent disabled:opacity-50"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-body font-medium mb-2">Password</label>
                <input
                  type="password"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent disabled:opacity-50"
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
                    disabled={loading}
                    className="w-full px-4 py-3 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent disabled:opacity-50"
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

              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Loading...' : (isSignUp ? 'Create Account' : 'Sign In')}
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
