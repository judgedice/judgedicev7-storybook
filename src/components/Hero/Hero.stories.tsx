import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    title: "Use the power of planting to attract, engage and inspire.",
    subtitle: "Planting the places where great teams thrive.",
    ctaText: "GET STARTED",
    onCtaClick: () => console.log('CTA clicked'),
  },
};

export const CustomContent: Story = {
  args: {
    title: "Transform your workspace with biophilic design",
    subtitle: "Creating environments where nature and productivity thrive together",
    ctaText: "LEARN MORE",
    onCtaClick: () => console.log('Learn more clicked'),
  },
};

export const Minimal: Story = {
  args: {
    title: "Welcome to Vantage Spaces",
    subtitle: "Your partner in biophilic workspace design",
    ctaText: "CONTACT US",
    onCtaClick: () => console.log('Contact clicked'),
  },
}; 