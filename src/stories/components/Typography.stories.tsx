import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Design System/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'small', 'caption'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: ['primary', 'text', 'text-light', 'success', 'warning', 'error', 'info'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// Headings
export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1 - The quick brown fox jumps over the lazy dog',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2 - The quick brown fox jumps over the lazy dog',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3 - The quick brown fox jumps over the lazy dog',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4 - The quick brown fox jumps over the lazy dog',
  },
};

export const Heading5: Story = {
  args: {
    variant: 'h5',
    children: 'Heading 5 - The quick brown fox jumps over the lazy dog',
  },
};

export const Heading6: Story = {
  args: {
    variant: 'h6',
    children: 'Heading 6 - The quick brown fox jumps over the lazy dog',
  },
};

// Body text
export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body text - The quick brown fox jumps over the lazy dog. This is a longer paragraph to demonstrate how body text looks with multiple lines. It includes various punctuation marks and spaces to show the typography in a realistic context.',
  },
};

export const Small: Story = {
  args: {
    variant: 'small',
    children: 'Small text - The quick brown fox jumps over the lazy dog',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text - The quick brown fox jumps over the lazy dog',
  },
};

// Weights
export const NormalWeight: Story = {
  args: {
    variant: 'body',
    weight: 'normal',
    children: 'Normal weight text',
  },
};

export const MediumWeight: Story = {
  args: {
    variant: 'body',
    weight: 'medium',
    children: 'Medium weight text',
  },
};

export const SemiboldWeight: Story = {
  args: {
    variant: 'body',
    weight: 'semibold',
    children: 'Semibold weight text',
  },
};

export const BoldWeight: Story = {
  args: {
    variant: 'body',
    weight: 'bold',
    children: 'Bold weight text',
  },
};

// Colors
export const PrimaryColor: Story = {
  args: {
    variant: 'body',
    color: 'primary',
    children: 'Primary color text',
  },
};

export const TextColor: Story = {
  args: {
    variant: 'body',
    color: 'text',
    children: 'Text color',
  },
};

export const TextLightColor: Story = {
  args: {
    variant: 'body',
    color: 'text-light',
    children: 'Text light color',
  },
};

export const SuccessColor: Story = {
  args: {
    variant: 'body',
    color: 'success',
    children: 'Success color text',
  },
};

export const WarningColor: Story = {
  args: {
    variant: 'body',
    color: 'warning',
    children: 'Warning color text',
  },
};

export const ErrorColor: Story = {
  args: {
    variant: 'body',
    color: 'error',
    children: 'Error color text',
  },
};

export const InfoColor: Story = {
  args: {
    variant: 'body',
    color: 'info',
    children: 'Info color text',
  },
};

// Alignment
export const LeftAligned: Story = {
  args: {
    variant: 'body',
    align: 'left',
    children: 'Left aligned text',
  },
};

export const CenterAligned: Story = {
  args: {
    variant: 'body',
    align: 'center',
    children: 'Center aligned text',
  },
};

export const RightAligned: Story = {
  args: {
    variant: 'body',
    align: 'right',
    children: 'Right aligned text',
  },
}; 