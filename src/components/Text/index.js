import React from "react";
const variantClasses = {
  h1: "font-normal lg:text-[47px] xl:text-[54px] text-[61px] 3xl:text-[73px]",
  h2: "font-normal lg:text-[32px] xl:text-[37px] text-[42px] 3xl:text-[50px]",
  h3: "font-normal lg:text-[29px] xl:text-[33px] text-[38px] 3xl:text-[45px]",
  h4: "font-normal lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px]",
  h5: "font-bold lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px]",
  h6: "lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  body1: "font-bold lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px]",
  body2: "lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  body3: "lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  body4: "lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body5:
    "font-normal lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px]",
  body6: "lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px]",
  body7: "font-normal xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
