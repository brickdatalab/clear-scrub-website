import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
}

export function Section({ children, className = '', background = 'white' }: SectionProps) {
  const backgrounds = {
    white: 'bg-cs-white',
    gray: 'bg-cs-g-100',
    dark: 'bg-cs-g-900 text-cs-white',
  };
  
  return (
    <section className={`py-20 md:py-32 ${backgrounds[background]} ${className}`}>
      {children}
    </section>
  );
}