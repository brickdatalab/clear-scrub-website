import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'narrow' | 'default' | 'wide' | 'full';
}

export function Container({ children, className = '', size = 'default' }: ContainerProps) {
  const sizeClasses = {
    narrow: 'max-w-3xl',      // ~768px - for reading content
    default: 'max-w-7xl',     // ~1280px - main UI
    wide: 'max-w-[1536px]',   // ~1536px - data-heavy layouts
    full: 'max-w-none',       // 100% width with padding only
  };

  return (
    <div className={`${sizeClasses[size]} mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}