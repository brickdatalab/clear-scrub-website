import { NetworkVisualization } from './NetworkVisualization';

export function TransactionNetwork() {
  const cards = [
    { id: 'bank', label: 'Bank Statements', x: 10, y: 40, prominent: true, icon: '📄' },
    { id: 'parser', label: 'Parser', x: 28, y: 40, prominent: true, icon: '⚡' },
    { id: 'normalize', label: 'Normalization', x: 50, y: 40, prominent: true, icon: '🔧' },
    { id: 'export', label: 'Export', x: 72, y: 40, prominent: true, icon: '📊' },
    { id: 'crm', label: 'CRM', x: 90, y: 40, prominent: true, icon: '💼' },
    { id: 'validate', label: 'Validation', x: 28, y: 70, prominent: false },
    { id: 'format', label: 'Format', x: 72, y: 70, prominent: false },
  ];

  const connections = [
    { from: 'bank', to: 'parser' },
    { from: 'parser', to: 'normalize' },
    { from: 'parser', to: 'validate', points: [{ x: 28, y: 55 }] },
    { from: 'normalize', to: 'export' },
    { from: 'export', to: 'crm' },
    { from: 'export', to: 'format', points: [{ x: 72, y: 55 }] },
  ];

  return <NetworkVisualization cards={cards} connections={connections} />;
}
