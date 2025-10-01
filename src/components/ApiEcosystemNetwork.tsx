import { NetworkVisualization } from './NetworkVisualization';

export function ApiEcosystemNetwork() {
  const cards = [
    { id: 'rest', label: 'REST API', x: 20, y: 35, prominent: true, icon: '🔌' },
    { id: 'webhook', label: 'Webhooks', x: 35, y: 55, prominent: true, icon: '🔔' },
    { id: 'batch', label: 'Batch Processing', x: 50, y: 30, prominent: true, icon: '⚙️' },
    { id: 'crm', label: 'Your CRM', x: 65, y: 50, prominent: true, icon: '💻' },
    { id: 'integrate', label: 'Integrations', x: 80, y: 35, prominent: true, icon: '🔗' },
    { id: 'auth', label: 'Authentication', x: 30, y: 75, prominent: false },
    { id: 'queue', label: 'Queue', x: 55, y: 70, prominent: false },
    { id: 'monitor', label: 'Monitoring', x: 75, y: 65, prominent: false },
  ];

  const connections = [
    { from: 'rest', to: 'batch' },
    { from: 'rest', to: 'auth' },
    { from: 'webhook', to: 'crm' },
    { from: 'webhook', to: 'queue' },
    { from: 'batch', to: 'integrate' },
    { from: 'batch', to: 'queue' },
    { from: 'crm', to: 'integrate' },
    { from: 'integrate', to: 'monitor' },
  ];

  return <NetworkVisualization cards={cards} connections={connections} />;
}
