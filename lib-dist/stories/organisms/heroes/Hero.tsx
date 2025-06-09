import React from 'react';
import './hero-css-styles.css';

export interface HeroProps {
  imageUrl: string | ArrayBuffer | null;
  imageAlt?: string;
  imageHeading: string;
  imageSubtext: string;
  contentHeading: string;
  contentSubtext: string;
  ctaText?: string;
  ctaBorder?: boolean;
  onCtaClick?: () => void;
  layout?: 'image-left' | 'image-right';
  darkBgColor?: string;
}

export const Hero: React.FC<HeroProps> = ({
  imageUrl,
  imageAlt = '',
  imageHeading,
  imageSubtext,
  contentHeading,
  contentSubtext,
  ctaText,
  ctaBorder = true,
  onCtaClick,
  layout = 'image-left',
  darkBgColor = '#1a3b3a'
}) => {
  const heroClass = `hero ${layout}`;
  
  const getImageStyle = () => {
    if (!imageUrl) return {};
    
    const backgroundImage = typeof imageUrl === 'string' 
      ? `url(${imageUrl})`
      : `url(${imageUrl.toString()})`;
      
    return { backgroundImage };
  };
  
  return (
    <div className={heroClass}>
      <div className="hero-image-section">
        <div 
          className="hero-image" 
          style={getImageStyle()}
          role="img"
          aria-label={imageAlt}
        >
          <div className="hero-image-overlay">
            <div className="hero-image-content">
              <h1 className="hero-image-heading">{imageHeading}</h1>
              <p className="hero-image-subtext">{imageSubtext}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="hero-content-section"
        style={{ backgroundColor: darkBgColor }}
      >
        <div className="hero-content">
          <h2 className="hero-content-heading">{contentHeading}</h2>
          <p className="hero-content-subtext">{contentSubtext}</p>
          {ctaText && (
            <button 
              className={`hero-cta ${ctaBorder ? 'bordered' : 'filled'}`}
              onClick={onCtaClick}
            >
              {ctaText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}; 