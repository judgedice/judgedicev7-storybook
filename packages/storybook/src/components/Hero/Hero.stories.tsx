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
    title: "Welcome to JudgeDice",
    subtitle: "Your digital dice rolling companion",
    ctaText: "GET STARTED",
    onCtaClick: () => console.log('CTA clicked'),
  },
};

export const CustomContent: Story = {
  args: {
    title: "Roll the dice, make your choice",
    subtitle: "Experience the thrill of digital dice rolling",
    ctaText: "LEARN MORE",
    onCtaClick: () => console.log('Learn more clicked'),
  },
};

export const Minimal: Story = {
  args: {
    title: "JudgeDice",
    subtitle: "Where chance meets choice",
    ctaText: "PLAY NOW",
    onCtaClick: () => console.log('Play clicked'),
  },
}; 