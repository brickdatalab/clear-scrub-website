import { useState } from 'react';

const codeSnippets = {
  Python: `import clearscrub

# Initialize the client
client = clearscrub.Client(api_key="your_api_key")

# Process a bank statement
result = client.process_statement(
    file_path="statement.pdf"
)

# Access enriched data
for txn in result.transactions:
    print(f"{txn.merchant}: ${'$'}{txn.amount}")
    print(f"Confidence: {txn.confidence_score}%")`,
  
  'Node.js': `import ClearScrub from 'clearscrub';

// Initialize the client
const client = new ClearScrub({
  apiKey: 'your_api_key'
});

// Process a bank statement
const result = await client.processStatement({
  filePath: 'statement.pdf'
});

// Access enriched data
result.transactions.forEach(transaction => {
  console.log(\`\${transaction.merchant}: $\${transaction.amount}\`);
  console.log(\`Confidence: \${transaction.confidence_score}%\`);
});`,
  
  Ruby: `require 'clearscrub'

# Initialize the client
client = ClearScrub::Client.new(
  api_key: 'your_api_key'
)

# Process a bank statement
result = client.process_statement(
  file_path: 'statement.pdf'
)

# Access enriched data
result.transactions.each do |transaction|
  puts "#{transaction.merchant}: $#{transaction.amount}"
  puts "Confidence: #{transaction.confidence_score}%"
end`,
  
  Go: `package main

import (
    "fmt"
    "github.com/clearscrub/clearscrub-go"
)

func main() {
    // Initialize the client
    client := clearscrub.NewClient("your_api_key")
    
    // Process a bank statement
    result, err := client.ProcessStatement(
        clearscrub.StatementOptions{
            FilePath: "statement.pdf",
        },
    )
    
    // Access enriched data
    for _, transaction := range result.Transactions {
        fmt.Printf("%s: $%.2f\\n", 
            transaction.Merchant, 
            transaction.Amount)
        fmt.Printf("Confidence: %.1f%%\\n", 
            transaction.ConfidenceScore)
    }
}`
};

export const InteractiveCodeBlock = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof codeSnippets>('Python');

  return (
    <div className="w-full">
      {/* Terminal Window */}
      <div className="rounded-lg overflow-hidden card-shadow">
        {/* Terminal Header */}
        <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <div className="ml-4 text-[#666666] text-sm font-mono">api_example.{activeTab.toLowerCase()}</div>
        </div>
        
        {/* Language Tabs */}
        <div className="bg-[#292929] border-b border-[#3a3a3a] px-4 flex gap-1">
          {(Object.keys(codeSnippets) as Array<keyof typeof codeSnippets>).map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveTab(lang)}
              className={`px-4 py-2 text-sm font-medium smooth-hover ${
                activeTab === lang
                  ? 'text-white border-b-2 border-[#09B878]'
                  : 'text-[#999999] hover:text-white'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
        
        {/* Code Content */}
        <div className="bg-[#292929] p-6 overflow-x-auto">
          <pre className="text-sm font-mono text-white leading-relaxed">
            <code 
              className="language-code"
              dangerouslySetInnerHTML={{ 
                __html: syntaxHighlight(codeSnippets[activeTab]) 
              }}
            />
          </pre>
        </div>
      </div>
    </div>
  );
};

// Simple syntax highlighter using the specified colors
const syntaxHighlight = (code: string): string => {
  return code
    // Comments
    .replace(/(#.*$|\/\/.*$)/gm, '<span style="color: #666666">$1</span>')
    // Strings
    .replace(/(".*?"|'.*?')/g, '<span style="color: #09B878">$1</span>')
    // Keywords
    .replace(/\b(import|from|def|class|return|if|else|for|in|await|const|let|var|function|require|package|func|range)\b/g, '<span style="color: #2C14C4">$1</span>')
    // Functions
    .replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, '<span style="color: #09B878">$1</span>(')
    // Numbers
    .replace(/\b(\d+\.?\d*)\b/g, '<span style="color: #09B878">$1</span>');
};
