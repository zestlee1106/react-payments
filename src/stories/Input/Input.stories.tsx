import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "../../components/Input/Input";
import { Size } from "../../types/common";

export default {
  title: "Components/Input/Input", // story 이름
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Full = Template.bind({});
Full.args = {
  size: Size.Big,
};
