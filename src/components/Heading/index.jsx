import React from "react";

const sizes = {
  "2xl": "text-[40px] font-semibold md:text-[38px] sm:text-4xl",
  xl: "text-3xl font-semibold md:text-[28px] sm:text-[26px]",
  s: "text-[13px] font-semibold",
  md: "text-base font-extrabold",
  xs: "text-[10px] font-semibold",
  lg: "text-2xl font-semibold md:text-[22px]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
