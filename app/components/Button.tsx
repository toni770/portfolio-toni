"use client";
import { forwardRef } from "react";
import { PulseLoader } from "react-spinners";
const Button = forwardRef<
  HTMLButtonElement,
  {
    text: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
  }
>(({ text, className, onClick, disabled, loading }, ref) => {
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
      {loading ? <PulseLoader color="white" className="py-2" /> : <p>{text}</p>}
    </button>
  );
});
Button.displayName = "Button";

export default Button;
