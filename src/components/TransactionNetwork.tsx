import { NetworkVisualization } from './NetworkVisualization';

export function TransactionNetwork() {
  const cards = [
    { id: 'bank', label: 'Bank Statements', x: 15, y: 30, prominent: true, icon: '📄' },
    { id: 'parser', label: 'Parser', x: 35, y: 50, prominent: true, icon: '⚡' },
    { id: 'normalize', label: 'Normalization Engine', x: 50, y: 25, prominent: true, icon: '🔧' },
    { id: 'export', label: 'Export', x: 70, y: 45, prominent: true, icon: '📊' },
    { id: 'crm', label: 'CRM', x: 85, y: 30, prominent: true, icon: '💼' },
    { id: 'validate', label: 'Validation', x: 25, y: 70, prominent: false },
    { id: 'format', label: 'Formatting', x: 60, y: 70, prominent: false },
    { id: 'cache', label: 'Cache', x: 80, y: 65, prominent: false },
  ];

  const connections = [
    { from: 'bank', to: 'parser' },
    { from: 'parser', to: 'normalize' },
    { from: 'parser', to: 'validate' },
    { from: 'normalize', to: 'export' },
    { from: 'normalize', to: 'format' },
    { from: 'export', to: 'crm' },
    { from: 'export', to: 'cache' },
  ];

  return <NetworkVisualization cards={cards} connections={connections} />;
}
