import Header from "components/Header";
import Search from "components/Search";
import UserDetails from "components/UserDetails";
import UserList from "components/UserList";
import React, { useContext, useEffect, useState } from "react";
import { favoritePage, searchedFavorites } from "store/actions";
import { Context } from "util/context";
import * as S from "../style";
const Favorites = () => {
  const { state, dispatch } = useContext(Context);
  const [userDetails, setUserDetails] = useState({});
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    if (!searchText.length) dispatch(favoritePage());
    else dispatch(searchedFavorites(searchText, state.favorites));
  }, [state.favorites, searchText]);

  return (
    <S.Page>
      {userDetails.active && (
        <UserDetails user={userDetails} setUserDetails={setUserDetails} />
      )}
      <S.Content>
        <Header title={"PplFavorites"} />
        <Search setSearchText={setSearchText} searchText={searchText} />
        <UserList
          isFavorites={true}
          setUserDetails={setUserDetails}
          searchText={searchText}
        />
      </S.Content>
    </S.Page>
  );
};

export default Favorites;
