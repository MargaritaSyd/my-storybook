import { Meta, StoryObj } from "@storybook/react";
import { MyButton } from "../components/MyButton/MyButton";

const meta = {
  title: 'UI/MyButton',
  component: MyButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'select' }
  }
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args:{
    label: 'Basic label',
    backgroundColor: "#72b9aa"
  }
};
