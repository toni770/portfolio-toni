"use client";
import { forwardRef } from "react";
const Button = forwardRef<
  HTMLButtonElement,
  {
    text: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
  }
>(({ text, className, onClick, disabled }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      role="button"
      disabled={disabled}
      className={`cursor-pointer border border-black p-2 px-15 rounded-4xl flex items-center justify-center ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <p>{text}</p>
    </button>
  );
});
Button.displayName = "Button";

export default Button;
