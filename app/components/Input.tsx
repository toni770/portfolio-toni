import React from "react";

const Input = ({
  label,
  type,
  icon,
  className,
}: {
  label: string;
  type: "text" | "email" | "phone" | "textArea";
  icon?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={className}>
      <div className="flex gap-2 items-center pb-1">
        {icon}
        <label className=" text-darkGray" htmlFor="name">
          {label}
        </label>
      </div>

      {type === "textArea" ? (
        <textarea
          className="resize-none border p-2 px-3 rounded-xl bg-black border-darkGray w-[100%] h-[10em]"
          rows={5}
          maxLength={300}
        ></textarea>
      ) : (
        <input
          className="border p-2 px-3 rounded-xl bg-black border-darkGray w-[100%]"
          type={type}
          maxLength={50}
        />
      )}
    </div>
  );
};

export default Input;
