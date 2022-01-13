import React from "react";
import { Typography } from "@material-ui/core";
import * as S from "./style";

const Text = ({ size = "14px", children, bold, isLabel }) => {
  return (
    <Typography>
      <S.Text size={size} bold={bold} isLabel={isLabel}>
        {children}
      </S.Text>
    </Typography>
  );
};

export default Text;
