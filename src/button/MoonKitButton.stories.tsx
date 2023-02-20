import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MoonKitButton from "./MoonKitButton";
import { ButtonSize } from "./ButtonSize.type";
import "./MoonKitButton.css";

export default {
  title: "MoonKitButton",
  component: MoonKitButton,
} as ComponentMeta<typeof MoonKitButton>;

export const medium: ComponentStory<typeof MoonKitButton> = () => (
  <MoonKitButton text={"medium"} size={ButtonSize.MEDIUM} color={"#4CAF50"} />
);

export const fullWidth: ComponentStory<typeof MoonKitButton> = () => (
  <MoonKitButton
    text={"full-width"}
    size={ButtonSize.FULL_WIDTH}
    color={"red"}
  />
);
