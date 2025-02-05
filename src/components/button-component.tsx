"use client";
import { Button } from "@material-tailwind/react";
import {
  color,
  variant,
  size,
} from "@material-tailwind/react/types/components/button";
import { ReactNode } from "react";

type ButtonProps = {
  children?: string | ReactNode;
  className?: string;
  variant?: variant;
  onClick?: VoidFunction;
  color?: color;
  size?: size;
};

const ButtonComponent = ({
  children,
  className,
  variant,
  onClick,
  color = "teal",
  size = "sm",
}: ButtonProps) => {
  return (
    <Button
      color={color}
      onClick={onClick}
      className={`${className} `}
      style={{marginTop: "20px", padding: "15px"}}
      variant={variant}
      size={size}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
