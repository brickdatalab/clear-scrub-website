import { NetworkVisualization } from './NetworkVisualization';

export function ApiEcosystemNetwork() {
  const cards = [
    { id: 'rest', label: 'REST API', x: 10, y: 50, prominent: true, icon: '🔌' },
    { id: 'webhook', label: 'Webhooks', x: 30, y: 35, prominent: true, icon: '🔔' },
    { id: 'batch', label: 'Batch', x: 30, y: 65, prominent: true, icon: '⚙️' },
    { id: 'crm', label: 'Your CRM', x: 55, y: 50, prominent: true, icon: '💻' },
    { id: 'integrate', label: 'Integrations', x: 80, y: 50, prominent: true, icon: '🔗' },
    { id: 'auth', label: 'Auth', x: 10, y: 75, prominent: false },
    { id: 'monitor', label: 'Monitor', x: 90, y: 75, prominent: false },
  ];

  const connections = [
    { from: 'rest', to: 'webhook' },
    { from: 'rest', to: 'batch' },
    { from: 'rest', to: 'auth' },
    { from: 'webhook', to: 'crm' },
    { from: 'batch', to: 'crm' },
    { from: 'crm', to: 'integrate' },
    { from: 'integrate', to: 'monitor' },
  ];

  return <NetworkVisualization cards={cards} connections={connections} />;
}
