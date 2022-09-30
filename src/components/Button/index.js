import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder4: "rounded-radius4",
  RoundedBorder20: "rounded-radius205",
  icbRoundedBorder16: "rounded-radius16",
};
const variants = {
  FillOrange500: "bg-orange_500 text-white_A700",
  OutlineBluegray102: "border border-bluegray_102 border-solid text-blue_800",
  OutlineBluegray103: "border border-bluegray_103 border-solid text-blue_800",
  OutlineWhiteA700:
    "bg-white_A700 border border-solid border-white_A700 text-blue_800",
  OutlineWhiteA7001_2: "border border-solid border-white_A700 text-white_A700",
  FillBlue800: "bg-blue_800 text-white_A700",
  icbFillPink300: "bg-pink_300",
  icbFillDeeporange300: "bg-deep_orange_300",
  icbFillGreenA400: "bg-green_A400",
  icbFillAmberA400: "bg-amber_A400",
  icbFillLightgreenA700: "bg-light_green_A700",
};
const sizes = {
  sm: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px]",
  md: "lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
  lg: "lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
  xl: "lg:p-[21px] xl:p-[24px] p-[27px] 3xl:p-[32px]",
  smIcn: "lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  mdIcn: "lg:p-[14px] xl:p-[16px] p-[19px] 3xl:p-[22px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder4",
    "RoundedBorder20",
    "icbRoundedBorder16",
  ]),
  variant: PropTypes.oneOf([
    "FillOrange500",
    "OutlineBluegray102",
    "OutlineBluegray103",
    "OutlineWhiteA700",
    "OutlineWhiteA7001_2",
    "FillBlue800",
    "icbFillPink300",
    "icbFillDeeporange300",
    "icbFillGreenA400",
    "icbFillAmberA400",
    "icbFillLightgreenA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder4",
  variant: "FillOrange500",
  size: "md",
};

export { Button };
