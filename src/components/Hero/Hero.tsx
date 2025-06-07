import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import styled from '@emotion/styled';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/hero-bg.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  color: '#FFFFFF',
}));

const HeroContent = styled(Container)({
  textAlign: 'center',
  padding: '4rem 0',
});

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  title = "Use the power of planting to attract, engage and inspire.",
  subtitle = "Planting the places where great teams thrive.",
  ctaText = "GET STARTED",
  onCtaClick,
}) => {
  return (
    <HeroSection>
      <HeroContent maxWidth="md">
        <Typography variant="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h2" gutterBottom sx={{ mb: 4 }}>
          {subtitle}
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={onCtaClick}
          sx={{
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'secondary.main',
            },
            padding: '1rem 2rem',
            fontSize: '1.2rem',
          }}
        >
          {ctaText}
        </Button>
      </HeroContent>
    </HeroSection>
  );
}; 