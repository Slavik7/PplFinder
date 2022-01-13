import React, { useState } from "react";

import UserList from "components/UserList";
import * as S from "../style";
import Filters from "components/Filters";
import Header from "components/Header";
import UserDetails from "components/UserDetails";

const Home = () => {
  const [userDetails, setUserDetails] = useState({});
  return (
    <S.Page>
      {userDetails.active && (
        <UserDetails user={userDetails} setUserDetails={setUserDetails} />
      )}
      <S.Content>
        <Header title={"PplFinder"} />
        <Filters />
        <UserList setUserDetails={setUserDetails} />
      </S.Content>
    </S.Page>
  );
};

export default Home;
