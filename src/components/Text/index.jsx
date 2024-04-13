import React from "react";

const sizes = {
  "5xl": "text-[27px] font-medium md:text-[25px] sm:text-[23px]",
  xs: "text-[11px] font-normal",
  lg: "text-[15px] font-normal",
  "6xl": "text-[28px] font-light md:text-[26px] sm:text-2xl",
  "7xl": "text-3xl font-medium md:text-[28px] sm:text-[26px]",
  "8xl": "text-[40px] font-medium md:text-[38px] sm:text-4xl",
  s: "text-[13px] font-normal",
  "2xl": "text-lg font-light",
  "3xl": "text-[19px] font-medium",
  "4xl": "text-2xl font-normal md:text-[22px]",
  xl: "text-base font-normal",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
