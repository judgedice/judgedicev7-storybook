import type { Meta, StoryObj } from '@storybook/react';
import { Colors } from '../../components/Colors';

const meta: Meta<typeof Colors> = {
  title: 'Design System/Colors',
  component: Colors,
  parameters: {
    layout: 'fullscreen',
    controls: {
      expanded: true,
    },
    actions: {
      handles: ['colorChanged'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    editable: {
      control: 'boolean',
      description: 'Enable color editing mode',
      defaultValue: false,
    },
    onColorChange: {
      action: 'colorChanged',
      description: 'Triggered when a color is changed or undone',
      table: {
        type: {
          summary: '(change: ColorChange) => void',
          detail: `{
  colorName: string;    // Name of the color that changed
  oldValue: string;     // Previous color value
  newValue: string;     // New color value
  timestamp: number;    // When the change occurred
}`,
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Colors>;

export const Default: Story = {
  args: {
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'View all available colors in the design system. Colors are displayed in their current state from CSS variables.',
      },
    },
  },
};

export const Editable: Story = {
  args: {
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive mode where you can edit colors using the color picker. Changes are tracked in the Actions panel and can be undone using the Undo button.',
      },
    },
  },
};

export const WithCustomColors: Story = {
  args: {
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates custom color changes and actions. Try changing colors and check the Actions panel to see detailed change logs.',
      },
    },
  },
  play: async ({ step }) => {
    const root = document.documentElement;
    
    await step('Initialize highlight colors', () => {
      root.style.setProperty('--vs-color-highlight', '#F6E05E');
      root.style.setProperty('--vs-color-highlight-light', '#FEFCBF');
      root.style.setProperty('--vs-color-highlight-dark', '#D69E2E');
    });

    await step('Update brand colors', () => {
      root.style.setProperty('--vs-color-primary', '#2C5282');
      root.style.setProperty('--vs-color-primary-dark', '#1A365D');
      root.style.setProperty('--vs-color-secondary', '#4A5568');
      root.style.setProperty('--vs-color-accent', '#48BB78');
    });

    await step('Adjust text colors', () => {
      root.style.setProperty('--vs-color-text', '#1A202C');
      root.style.setProperty('--vs-color-text-light', '#4A5568');
      root.style.setProperty('--vs-color-text-lighter', '#718096');
    });
  },
}; 