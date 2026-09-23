import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button = ({
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`ui-button ui-button-${variant}`}
      {...props}
    >
      {children}
    </button>
  );
};