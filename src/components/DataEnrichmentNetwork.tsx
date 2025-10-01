import { NetworkVisualization } from './NetworkVisualization';

export function DataEnrichmentNetwork() {
  const cards = [
    { id: 'contact', label: 'Contact Data', x: 15, y: 40, prominent: true, icon: '👤' },
    { id: 'verify', label: 'Verification', x: 35, y: 25, prominent: true, icon: '✓' },
    { id: 'phone', label: 'Phone Numbers', x: 50, y: 50, prominent: true, icon: '📱' },
    { id: 'email', label: 'Emails', x: 65, y: 30, prominent: true, icon: '✉️' },
    { id: 'business', label: 'Business Details', x: 85, y: 45, prominent: true, icon: '🏢' },
    { id: 'source', label: 'Data Sources', x: 25, y: 65, prominent: false },
    { id: 'enrich', label: 'Enrichment', x: 50, y: 75, prominent: false },
    { id: 'output', label: 'Output', x: 75, y: 70, prominent: false },
  ];

  const connections = [
    { from: 'contact', to: 'verify' },
    { from: 'contact', to: 'source' },
    { from: 'verify', to: 'phone' },
    { from: 'verify', to: 'email' },
    { from: 'phone', to: 'business' },
    { from: 'email', to: 'business' },
    { from: 'source', to: 'enrich' },
    { from: 'enrich', to: 'output' },
    { from: 'business', to: 'output' },
  ];

  return <NetworkVisualization cards={cards} connections={connections} />;
}
