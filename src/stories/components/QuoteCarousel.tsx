import React, { useState, useEffect } from 'react';
import './quote-carousel.css';

export interface Quote {
  pullQuote: string;
  body: string;
  citation: {
    name: string;
    role: string;
    company: string;
  };
}

interface QuoteCarouselProps {
  quotes: Quote[];
  autoRotate?: boolean;
  rotationInterval?: number;
  backgroundColor?: string;
  textColor?: string;
  quoteMarkColor?: string;
}

export const QuoteCarousel: React.FC<QuoteCarouselProps> = ({
  quotes,
  autoRotate = true,
  rotationInterval = 5000,
  backgroundColor = 'var(--vs-color-secondary)',
  textColor = 'var(--vs-color-text-lighter)',
  quoteMarkColor = 'var(--vs-color-text-lighter)',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
        setIsTransitioning(false);
      }, 500);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, quotes.length, rotationInterval]);

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  const currentQuote = quotes[currentIndex];

  const styles = {
    '--quote-carousel-bg': backgroundColor,
    '--quote-carousel-text': textColor,
    '--quote-carousel-quote-mark': quoteMarkColor,
  } as React.CSSProperties;

  return (
    <section className="quote-carousel" style={styles}>
      <div className="quote-carousel__container">
        <div className={`quote-carousel__content ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          <div className="quote-carousel__quote-wrapper">
            <div className="quote-carousel__pull-quote">
              <span className="quote-carousel__quote-mark"></span>
              {currentQuote.pullQuote}
            </div>
            <div className="quote-carousel__body">
              {currentQuote.body}
            </div>
            <div className="quote-carousel__citation">
              <div className="quote-carousel__citation-name">{currentQuote.citation.name}</div>
              <div className="quote-carousel__citation-role">{currentQuote.citation.role}</div>
              <div className="quote-carousel__citation-company">{currentQuote.citation.company}</div>
            </div>
          </div>
        </div>
        <div className="quote-carousel__navigation">
          {quotes.map((_, index) => (
            <button
              key={index}
              className={`quote-carousel__dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`View quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 