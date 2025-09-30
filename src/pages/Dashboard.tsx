import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../integrations/supabase/client';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { User } from '@supabase/supabase-js';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/login');
      } else {
        setUser(user);
      }
      setLoading(false);
    };

    checkUser();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <Section background="white" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-cs-g-500">Loading...</p>
        </div>
      </Section>
    );
  }

  return (
    <Section background="white" className="pt-32 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-display mb-2">Dashboard</h1>
              <p className="text-subhead text-cs-g-500">
                Welcome back, {user?.user_metadata?.name || user?.email}
              </p>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>

          <div className="bg-cs-g-100 rounded-2xl p-12 text-center">
            <h2 className="text-heading mb-4">Dashboard Coming Soon</h2>
            <p className="text-body text-cs-g-500 mb-6">
              Your dashboard is under construction. Here you'll be able to:
            </p>
            <ul className="text-body text-cs-g-700 space-y-2 max-w-md mx-auto">
              <li>• Upload and process bank statements</li>
              <li>• View parsed transaction data</li>
              <li>• Manage API keys</li>
              <li>• Export reports</li>
            </ul>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-cs-g-200 rounded-xl p-6">
              <h3 className="text-heading mb-2">Processed This Month</h3>
              <p className="text-[32px] font-bold text-cs-accent">0</p>
              <p className="text-sm text-cs-g-500">PDFs</p>
            </div>

            <div className="bg-white border border-cs-g-200 rounded-xl p-6">
              <h3 className="text-heading mb-2">Total Spent</h3>
              <p className="text-[32px] font-bold text-cs-accent">$0.00</p>
              <p className="text-sm text-cs-g-500">This month</p>
            </div>

            <div className="bg-white border border-cs-g-200 rounded-xl p-6">
              <h3 className="text-heading mb-2">API Calls</h3>
              <p className="text-[32px] font-bold text-cs-accent">0</p>
              <p className="text-sm text-cs-g-500">Last 30 days</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
