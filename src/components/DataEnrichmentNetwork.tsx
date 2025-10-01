import { NetworkVisualization } from './NetworkVisualization';

export function DataEnrichmentNetwork() {
  const cards = [
    { id: 'contact', label: 'Contact Data', x: 10, y: 50, prominent: true, icon: '👤' },
    { id: 'verify', label: 'Verification', x: 32, y: 50, prominent: true, icon: '✓' },
    { id: 'phone', label: 'Phone', x: 54, y: 35, prominent: true, icon: '📱' },
    { id: 'email', label: 'Email', x: 54, y: 65, prominent: true, icon: '✉️' },
    { id: 'business', label: 'Business', x: 76, y: 50, prominent: true, icon: '🏢' },
    { id: 'source', label: 'Sources', x: 10, y: 75, prominent: false },
    { id: 'output', label: 'Output', x: 90, y: 50, prominent: false },
  ];

  const connections = [
    { from: 'contact', to: 'verify' },
    { from: 'contact', to: 'source' },
    { from: 'verify', to: 'phone' },
    { from: 'verify', to: 'email' },
    { from: 'phone', to: 'business' },
    { from: 'email', to: 'business' },
    { from: 'business', to: 'output' },
  ];

  return <NetworkVisualization cards={cards} connections={connections} />;
}
