"use client";
import React from "react";
import clsx from "clsx";
export interface ButtonProps {
  text?: string;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
  fontSize?: string;
  border?: string;
  rounded?: string;
  width?: string;
  height?: string;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  text = "Click Me",
  onClick,
  bgColor = "bg-[#0066FF]",
  textColor = "text-white",
  hoverColor = "hover:bg-[#0052CC]",
  fontSize = "text-sm",
  border = "",
  rounded = "rounded-md",
  width = "w-auto",
  height = "h-auto",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "font-normal transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer",
        bgColor,
        textColor,
        hoverColor,
        fontSize,
        border,
        rounded,
        width,
        height,
        className
      )}
    >
      {text}
    </button>
  );
};
export default Button;
