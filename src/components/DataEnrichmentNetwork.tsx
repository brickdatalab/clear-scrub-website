import { NetworkVisualization } from './NetworkVisualization';

export function DataEnrichmentNetwork() {
  const cards = [
    { id: 'contact', label: 'Contact Data', x: 10, y: 50, prominent: true, icon: '👤' },
    { id: 'verify', label: 'Verification', x: 30, y: 50, prominent: true, icon: '✓' },
    { id: 'phone', label: 'Phone', x: 52, y: 35, prominent: true, icon: '📱' },
    { id: 'email', label: 'Email', x: 52, y: 65, prominent: true, icon: '✉️' },
    { id: 'business', label: 'Business', x: 74, y: 50, prominent: true, icon: '🏢' },
    { id: 'source', label: 'Sources', x: 10, y: 75, prominent: false },
    { id: 'output', label: 'Output', x: 90, y: 50, prominent: false },
  ];

  const connections = [
    { from: 'contact', to: 'verify' },
    { from: 'contact', to: 'source', points: [{ x: 10, y: 62 }] },
    { from: 'verify', to: 'phone', points: [{ x: 40, y: 42 }] },
    { from: 'verify', to: 'email', points: [{ x: 40, y: 58 }] },
    { from: 'phone', to: 'business', points: [{ x: 64, y: 42 }] },
    { from: 'email', to: 'business', points: [{ x: 64, y: 58 }] },
    { from: 'business', to: 'output' },
  ];

  return <NetworkVisualization cards={cards} connections={connections} />;
}
