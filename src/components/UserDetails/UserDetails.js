import Text from "components/Text";
import React from "react";

import * as S from "./style";
const UserDetails = ({ user, setUserDetails }) => {
  return (
    <S.UserDetailsContainer onClick={() => setUserDetails({})}>
      <S.UserDetails>
        <S.UserImage src={user?.picture.large} alt="user image" />
        <S.UserInfo>
          <Text size="10px" isLabel>
            {"Full Name:"}
          </Text>
          <Text size="24px" bold>
            {user?.name.title} {user?.name.first} {user?.name.last}
          </Text>
          <Text size="10px" isLabel>
            {"Age:"}
          </Text>
          <Text size="18px">{user?.dob.age}</Text>
          <Text size="10px" isLabel>
            {"Gender:"}
          </Text>
          <Text size="18px">{user?.gender}</Text>
          <Text size="10px" isLabel>
            {"Location:"}
          </Text>
          <Text size="18px">
            {`${user?.location.country}, ${user?.location.state}, ${user?.location.city}`}
          </Text>
          <Text size="10px" isLabel>
            {"Cellphone:"}
          </Text>
          <Text size="18px">{user?.cell}</Text>
          <Text size="10px" isLabel>
            {"Phone:"}
          </Text>
          <Text size="18px">{user?.phone}</Text>
          <Text size="10px" isLabel>
            {"Email:"}
          </Text>
          <Text size="18px">{user?.email}</Text>
        </S.UserInfo>
      </S.UserDetails>
    </S.UserDetailsContainer>
  );
};

export default UserDetails;
