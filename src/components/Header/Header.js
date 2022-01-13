import React from "react";
import * as S from "./style";
import Text from "components/Text";
const Header = ({ title }) => {
  return (
    <S.Header>
      <Text size="64px" bold>
        {title}
      </Text>
    </S.Header>
  );
};

export default Header;
