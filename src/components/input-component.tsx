"use client";
import { Input } from "@material-tailwind/react";
import type {
  variant,
  color,
  containerProps,
  labelProps,
  size,
} from "@material-tailwind/react/types/components/input";
import { ChangeEventHandler } from "react";

type Prop = {
  label: string;
  variant?: variant;
  placeholder?: string;
  color?: color;
  className?: string;
  inputClassName?: string;
  type?: string;
  containerProps?: containerProps;
  labelProps?: labelProps;
  onChange?: ChangeEventHandler | undefined;
  value?: string | number;
  success?: boolean;
  defaultValue?: string | number;
  style?: object;
  size?: size;
};

export function InputComponent({
  label,
  variant,
  placeholder,
  labelProps,
  color,
  className,
  inputClassName,
  containerProps,
  type = "text",
  onChange,
  value,
  defaultValue,
  success = false,
  style,
  size = "lg",
}: Prop) {
  return (
    <div className={`w-72 ${className}`}>
      <Input
        type={type}
        label={label}
        variant={variant}
        color={color}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        className={` placeholder:opacity-100 ${inputClassName}`}
        containerProps={containerProps}
        labelProps={labelProps}
        size={size}
        crossOrigin={undefined}
        success={success}
        style={style}
      />
    </div>
  );
}
