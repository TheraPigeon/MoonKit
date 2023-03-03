import { CSSProperties, FC, MouseEventHandler } from "react";
import { SideNavElementOBJ } from "./SideNavElement.type";
import React from "react";
import "./MoonKitSideNav.css";

interface SideNavElementsProps {
  color?: string;
  elementOBJARR: Array<SideNavElementOBJ>;
}

const SideNavElements: FC<SideNavElementsProps> = ({
  color,
  elementOBJARR,
}) => {
  const styles: CSSProperties = { backgroundColor: color };
  return (
    <div className="element" style={styles}>
      {elementOBJARR.map((e) => (
        <div>{e.text}</div>
      ))}
    </div>
  );
};

SideNavElements.displayName = "MoonKitSideNav";
export default SideNavElements;
