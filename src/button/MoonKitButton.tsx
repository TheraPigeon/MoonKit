import { CSSProperties, FC, MouseEventHandler } from "react";
import { ButtonSize } from "./ButtonSize.type";
import React from "react";
import "./MoonKitButton.css";

interface MoonKitButtonProps {
  text?: string;
  size?: ButtonSize;
  onClick?: MouseEventHandler;
  color?: string;
}

const MoonKitButton: FC<MoonKitButtonProps> = ({
  text,
  size,
  onClick,
  color,
}) => {
  const styles: CSSProperties = { backgroundColor: color };
  return (
    <div>
      <button
        onClick={onClick}
        style={styles}
        className="MoonKitButton"
        data-size={size}
      >
        <span>{text}</span>
      </button>
    </div>
  );
};

MoonKitButton.displayName = "MoonKitButton";
export default MoonKitButton;
