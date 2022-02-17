import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button } from ".";
import { ButtonProps } from "./Button";

export default {
  title: "Marbella/Button",
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variation: "fill",
  primary: true,
  disabled: false,
  text: "Primary",
};
