import React from "react";
import { FC } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MoonKitSideNav from "./MoonKitSideNav";
import "./MoonKitSideNav.css";
import SideNavElement from "./SideNavElement";

const homeIcon =
  "M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z";

const HomeIcon: FC = () => {
  return (
    <svg width="22" height="22" viewBox="0 0 1024 1024">
      <path d={homeIcon}></path>
    </svg>
  );
};

const testOBJ = {
  icon: <HomeIcon />,
  text: "HOME",
  to: "/home",
};

export default {
  title: "Single SideNavElement",
  component: SideNavElement,
} as ComponentMeta<typeof SideNavElement>;

export const SingleSideNavElement: ComponentStory<typeof SideNavElement> =
  () => (
    <SideNavElement
      icon={testOBJ.icon}
      text={testOBJ.text}
      to={testOBJ.to}
      backgroundColor={"green"}
    ></SideNavElement>
  );
