import type { Meta, StoryObj } from '@storybook/react';

const BreakpointsDesign = () => (
  <div className="vs-breakpoints-design">
    <h1>Breakpoints Design System</h1>
    <p>This is a showcase of our breakpoint styles.</p>
  </div>
);

const meta = {
  title: 'Design/Breakpoints',
  component: BreakpointsDesign,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BreakpointsDesign>;

export default meta;
type Story = StoryObj<typeof BreakpointsDesign>;

export const Default: Story = {
  args: {},
};

export const BreakpointSystem: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="p-4 bg-gray-100">
        <h3 className="font-bold">Mobile First</h3>
        <ul className="list-disc list-inside mt-2">
          <li>sm: 640px</li>
          <li>md: 768px</li>
          <li>lg: 1024px</li>
          <li>xl: 1280px</li>
          <li>2xl: 1536px</li>
        </ul>
      </div>
      <div className="p-4 bg-gray-100">
        <h3 className="font-bold">Example Usage</h3>
        <pre className="mt-2 bg-gray-800 text-white p-4 rounded">
          {`<div className="
  w-full
  md:w-1/2
  lg:w-1/3
  xl:w-1/4
">`}
        </pre>
      </div>
    </div>
  ),
}; 