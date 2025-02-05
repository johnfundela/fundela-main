import { ReactNode } from "react";

type Props = {
  children?: string | ReactNode;
  className?: string;
  type?: "primary" | "secondary";
};

const ChipComponent = ({ children, className }: Props) => {
  return (
    <div
      style={{ width: "min-content" }}
      className={`${
        className ? className : ""
      }  shadow-xl rounded-full p-2 pl-4 pr-4 text-sm`}
    >
      {children}
    </div>
  );
};

export default ChipComponent;
