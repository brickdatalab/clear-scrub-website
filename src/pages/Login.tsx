import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../integrations/supabase/client';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Label } from '../components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { z } from 'zod';

const signUpSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(128, 'Password must be less than 128 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const signInSchema = z.object({
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  password: z.string().min(1, 'Password is required')
});

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState('');

  useEffect(() => {
    const mode = searchParams.get('mode');
    if (mode === 'signup') {
      setIsSignUp(true);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        // VALIDATE INPUT FIRST
        const validatedData = signUpSchema.parse({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword
        });

        // Sign up with Supabase
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: validatedData.email,
          password: validatedData.password,
          options: {
            data: {
              name: validatedData.name,
            },
            emailRedirectTo: `${window.location.origin}/dashboard`,
          },
        });

        if (signUpError) throw signUpError;

        if (data.user) {
          // Check if email confirmation is required
          if (data.user.identities && data.user.identities.length === 0) {
            setError('An account with this email already exists');
          } else {
            // Redirect to dashboard after successful signup
            navigate('/dashboard');
          }
        }
      } else {
        // VALIDATE INPUT FIRST
        const validatedData = signInSchema.parse({
          email: formData.email,
          password: formData.password
        });

        // Sign in with Supabase
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email: validatedData.email,
          password: validatedData.password,
        });

        if (signInError) throw signInError;

        if (data.user) {
          // Redirect to dashboard page
          navigate('/dashboard');
        }
      }
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        setError(err.issues[0].message);
      } else {
        setError(err.message || 'An error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section background="white" className="pt-32 pb-20">
      <Container>
        <div className="max-w-[450px] mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2">
              {isSignUp ? 'Create Your Account' : 'Welcome Back'}
            </h1>
            <p className="text-sm text-cs-g-500">
              {isSignUp 
                ? 'Start processing bank statements in seconds' 
                : 'Sign in to access your dashboard'}
            </p>
          </div>

          <Card className="shadow-lg p-6">
            {/* Tabs */}
            <div className="flex gap-1 mb-6 p-1 bg-cs-g-100 rounded-lg">
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
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div>
                  <Label htmlFor="name" className="text-cs-g-700 text-sm">Full Name</Label>
                  <input
                    id="name"
                    type="text"
                    required={isSignUp}
                    disabled={loading}
                    className="w-full px-3 py-2 mt-1 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              )}

              <div>
                <Label htmlFor="email" className="text-cs-g-700 text-sm">Email Address</Label>
                <input
                  id="email"
                  type="email"
                  required
                  disabled={loading}
                  className="w-full px-3 py-2 mt-1 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent focus:border-transparent transition-all disabled:opacity-50"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-cs-g-700 text-sm">Password</Label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    disabled={loading}
                    className="w-full px-3 py-2 pr-10 mt-1 border border-cs-g-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => {
                      setFormData({...formData, password: e.target.value});
                      if (isSignUp && formData.confirmPassword) {
                        setPasswordMatchError(
                          e.target.value !== formData.confirmPassword ? 'Passwords do not match' : ''
                        );
                      }
                    }}
                  />
                  {isSignUp && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-cs-g-500 hover:text-cs-g-700 transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  )}
                </div>
              </div>

              {isSignUp && (
                <div>
                  <Label htmlFor="confirmPassword" className="text-cs-g-700 text-sm">Confirm Password</Label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required={isSignUp}
                      disabled={loading}
                      className={`w-full px-3 py-2 pr-10 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cs-accent focus:border-transparent transition-all disabled:opacity-50 ${
                        passwordMatchError ? 'border-red-500' : 'border-cs-g-300'
                      }`}
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={(e) => {
                        setFormData({...formData, confirmPassword: e.target.value});
                        setPasswordMatchError(
                          formData.password !== e.target.value ? 'Passwords do not match' : ''
                        );
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-cs-g-500 hover:text-cs-g-700 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {passwordMatchError && (
                    <p className="text-xs text-red-600 mt-1">{passwordMatchError}</p>
                  )}
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
                className="w-full mt-4"
                disabled={loading}
              >
                {loading ? 'Loading...' : (isSignUp ? 'Create Account' : 'Sign In')}
              </Button>
            </form>

            {isSignUp && (
              <p className="mt-4 text-xs text-center text-cs-g-500">
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
