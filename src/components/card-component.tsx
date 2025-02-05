"use client";

import { Card } from "@material-tailwind/react";
import { ReactNode } from "react";

type Props = {
  children?: string | ReactNode;
  className?: string;
  type?: "primary" | "secondary";
};

const CardComponent = ({ children, className, type }: Props) => {
  const getType = () => {
    switch (type) {
      case "primary":
        return "bg-teal-700";
      case "secondary":
      default:
        return "";
    }
  };

  return (
    <Card className={`shadow-2xl p-2 ${getType()} ${className}`}>
      <div>{children}</div>
    </Card>
  );
};

export default CardComponent;
