import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import * as C from "constant";

const Button = ({
  label,
  color = C.COLORS.default,
  disabled,
  size = C.SIZE.medium,
  variant = C.VARIANT.containd,
  onClick,
  fontSize,
}) => {
  return (
    <MuiButton
      onClick={onClick}
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      style={{ fontSize: fontSize }}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
