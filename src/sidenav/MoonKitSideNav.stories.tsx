import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MoonKitSideNav from "./MoonKitSideNav";
import "./MoonKitSideNav.css";
import SideNavElement from "./SideNavElement";

const icons = {
  person:
    "M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z",
  home: "M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z",
};

const Icon = (props) => (
  <svg width="22" height="22" viewBox="0 0 1024 1024">
    <path d={icons[props.icon]}></path>
  </svg>
);

export default {
  title: "MoonKitSideNav",
  component: MoonKitSideNav,
} as ComponentMeta<typeof MoonKitSideNav>;

export const sideNav: ComponentStory<typeof MoonKitSideNav> = () => (
  <MoonKitSideNav color={"#0000FF"} />
);
