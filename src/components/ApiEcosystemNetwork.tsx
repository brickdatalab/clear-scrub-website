import { NetworkVisualization } from './NetworkVisualization';

export function ApiEcosystemNetwork() {
  const cards = [
    { id: 'rest', label: 'REST API', x: 10, y: 50, prominent: true, icon: '🔌' },
    { id: 'webhook', label: 'Webhooks', x: 32, y: 35, prominent: true, icon: '🔔' },
    { id: 'batch', label: 'Batch', x: 32, y: 65, prominent: true, icon: '⚙️' },
    { id: 'crm', label: 'Your CRM', x: 56, y: 50, prominent: true, icon: '💻' },
    { id: 'integrate', label: 'Integrations', x: 78, y: 50, prominent: true, icon: '🔗' },
    { id: 'auth', label: 'Authentication', x: 10, y: 75, prominent: false },
    { id: 'monitor', label: 'Monitoring', x: 90, y: 75, prominent: false },
  ];

  const connections = [
    { from: 'rest', to: 'webhook', points: [{ x: 20, y: 42 }] },
    { from: 'rest', to: 'batch', points: [{ x: 20, y: 58 }] },
    { from: 'rest', to: 'auth', points: [{ x: 10, y: 62 }] },
    { from: 'webhook', to: 'crm', points: [{ x: 44, y: 42 }] },
    { from: 'batch', to: 'crm', points: [{ x: 44, y: 58 }] },
    { from: 'crm', to: 'integrate' },
    { from: 'integrate', to: 'monitor', points: [{ x: 84, y: 62 }] },
  ];

  return <NetworkVisualization cards={cards} connections={connections} />;
}
