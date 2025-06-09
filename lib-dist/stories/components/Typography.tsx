import React, { ElementType } from 'react';
import './typography.css';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'small' | 'caption';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'text' | 'text-light' | 'success' | 'warning' | 'error' | 'info';
  align?: 'left' | 'center' | 'right';
  className?: string;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  weight = 'normal',
  color = 'text',
  align = 'left',
  className = '',
  children,
}) => {
  // Map variant to HTML element
  const getElement = (variant: string): ElementType => {
    if (variant.startsWith('h')) return variant as ElementType;
    if (variant === 'subtitle') return 'h2';
    return 'p';
  };

  const Component = getElement(variant);
  const classes = [
    'vs-typography',
    `vs-typography--${variant}`,
    `vs-typography--${weight}`,
    `vs-typography--${color}`,
    `vs-typography--${align}`,
    className,
  ].join(' ');

  return <Component className={classes}>{children}</Component>;
}; 