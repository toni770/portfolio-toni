"use client";
import { forwardRef } from "react";
const Button = forwardRef<
  HTMLDivElement,
  {
    text: string;
    className?: string;
    onClick?: () => void;
  }
>(({ text, className, onClick }, ref) => {
  return (
    <div
      ref={ref}
      onClick={onClick}
      role="button"
      className={`cursor-pointer border border-black p-2 px-15 rounded-4xl flex items-center justify-center ${className}`}
    >
      <p>{text}</p>
    </div>
  );
});
Button.displayName = "Button";

export default Button;
