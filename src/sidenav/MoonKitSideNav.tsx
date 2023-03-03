import { CSSProperties, FC, MouseEventHandler } from "react";
import { SideNavElementOBJ } from "./SideNavElement.type";
import React from "react";
import "./MoonKitSideNav.css";

interface MoonKitSideNavProps {
  topelements?: Array<SideNavElementOBJ>;
  bottomelements?: Array<SideNavElementOBJ>;
  onClick?: MouseEventHandler;
  color?: string;
  collapseicon?: FC;
  open?: boolean;
}

const MoonKitSideNav: FC<MoonKitSideNavProps> = ({
  topelements,
  bottomelements,
  onClick,
  color,
  collapseicon,
  open,
}) => {
  const styles: CSSProperties = { backgroundColor: color };
  return <div className="container" style={styles}></div>;
};

MoonKitSideNav.displayName = "MoonKitSideNav";
export default MoonKitSideNav;
