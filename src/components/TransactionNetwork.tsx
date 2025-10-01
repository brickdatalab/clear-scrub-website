import { NetworkVisualization } from './NetworkVisualization';

export function TransactionNetwork() {
  const cards = [
    { id: 'bank', label: 'Bank Statements', x: 10, y: 50, prominent: true, icon: '📄' },
    { id: 'parser', label: 'Parser', x: 30, y: 50, prominent: true, icon: '⚡' },
    { id: 'normalize', label: 'Normalization', x: 50, y: 50, prominent: true, icon: '🔧' },
    { id: 'export', label: 'Export', x: 70, y: 50, prominent: true, icon: '📊' },
    { id: 'crm', label: 'CRM', x: 90, y: 50, prominent: true, icon: '💼' },
    { id: 'validate', label: 'Validation', x: 30, y: 75, prominent: false },
    { id: 'format', label: 'Format', x: 70, y: 75, prominent: false },
  ];

  const connections = [
    { from: 'bank', to: 'parser' },
    { from: 'parser', to: 'normalize' },
    { from: 'parser', to: 'validate' },
    { from: 'normalize', to: 'export' },
    { from: 'export', to: 'format' },
    { from: 'export', to: 'crm' },
  ];

  return <NetworkVisualization cards={cards} connections={connections} />;
}
