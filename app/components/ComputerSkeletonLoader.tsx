import React from "react";

export const ComputerSkeletonLoader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className=" w-170 h-100 inset-0 bg-gray-300 animate-pulse rounded-lg" />
    </div>
  );
};
