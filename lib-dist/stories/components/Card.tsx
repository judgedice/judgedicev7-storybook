'use client';

import React from 'react';
import './card.css';

export interface CardProps {
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  variant?: 'default' | 'green' | 'orange';
  backgroundImage?: string;
  onCtaClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  features,
  ctaText,
  variant = 'default',
  backgroundImage,
  onCtaClick
}) => {
  const cardClass = `card ${variant !== 'default' ? variant : ''}`;
  
  const backgroundStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <div className={cardClass}>
      <div className="card-image" style={backgroundStyle}>
        <h2 className="card-title">{title}</h2>
      </div>
      <div className="card-details">
        <h3 className="detail-title">{title}</h3>
        <p className="detail-description">{description}</p>
        <ul className="detail-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className="detail-cta" onClick={onCtaClick}>
          {ctaText}
        </button>
      </div>
    </div>
  );
};