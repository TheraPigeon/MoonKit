import {
  CSSProperties,
  FC,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from "react";
import { SideNavElementOBJ } from "./SideNavElement.type";
import React from "react";
import "./MoonKitSideNav.css";
import { NONAME } from "dns";

interface SideNavElementProps {
  icon?: SideNavElementOBJ["icon"];
  text?: SideNavElementOBJ["text"];
  to?: SideNavElementOBJ["to"];
}

const SideNavElement: FC<SideNavElementProps> = ({ icon, text, to }) => {
  const handleClick = (link) => {};

  return (
    <div
      style={{
        color: "black",
        width: "max-content",
        padding: 0,
        border: "none",
      }}
    >
      <div>
        {icon}
        {text}
      </div>
    </div>
  );
};

SideNavElement.displayName = "MoonKitSideNav";
export default SideNavElement;
