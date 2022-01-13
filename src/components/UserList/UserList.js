import React, { useEffect, useState, useContext, useRef } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import { Context } from "util/context";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";
import {
  addFavorite,
  addUser,
  moreFavorites,
  moreUsers,
  removeFavorite,
  removeUser,
} from "store/actions";
import Button from "components/Button";
import * as storage from "util/storage";

const UserList = ({ setUserDetails, isFavorites = false, searchText = "" }) => {
  const { state, dispatch } = useContext(Context);
  const [hoveredUserId, setHoveredUserId] = useState(-1);

  const listRef = useRef(null);

  //for filters change
  useEffect(() => {
    if (listRef?.current && (searchText.length || !isFavorites)) {
      listRef.current.scrollTop = 0;
    }
  }, [state.queryStr, searchText]);

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };
  //for infinity scrooling
  const handelScroll = (e) => {
    if (e.target.scrollTop + e.target.clientHeight + 1 >= e.target.scrollHeight) {
      if (!state.isLoading) {
        if (!isFavorites) dispatch(moreUsers(dispatch, state.page + 1, state.queryStr));
        else if (
          isFavorites &&
          state.favorites.length > state.users.length &&
          !searchText.length
        )
          dispatch(moreFavorites());
      }
    }
  };

  const favoritesHandler = (user) => {
    const favsArr = state.favorites.filter((u) => u.email !== user.email); //email is an uniqe id
    if (favsArr.length < state.favorites.length) {
      storage.set("favorites", [...favsArr]);
      dispatch(removeFavorite(user));
      isFavorites && dispatch(removeUser(user));
    } else {
      storage.set("favorites", [...favsArr, user]);
      dispatch(addFavorite(user));
      isFavorites && dispatch(addUser(user));
    }
  };
  return (
    <S.List onScroll={handelScroll} ref={listRef}>
      {state.users.map((user, index) => {
        return (
          <S.User
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <S.UserPicture src={user?.picture.large} alt="user image" />
            <S.UserInfo>
              <Text size="22px" bold>
                {user?.name.title} {user?.name.first} {user?.name.last}
              </Text>
              <Text size="14px">{user?.email}</Text>
              <Text size="14px">
                {user?.location.street.number} {user?.location.street.name}
              </Text>
              <Text size="14px">
                {user?.location.city} {user?.location.country}
              </Text>
            </S.UserInfo>
            <S.IconButtonWrapper
              isVisible={
                index === hoveredUserId ||
                state.favorites.findIndex((u) => u.email === user.email) >= 0
              }
            >
              <IconButton onClick={() => favoritesHandler(user)}>
                <FavoriteIcon color="error" />
              </IconButton>
              <Button
                label={"More Details"}
                fontSize={"10px"}
                onClick={() => setUserDetails({ ...user, active: true })}
              />
            </S.IconButtonWrapper>
          </S.User>
        );
      })}
      {state.isLoading && (
        <S.SpinnerWrapper>
          <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
        </S.SpinnerWrapper>
      )}
    </S.List>
  );
};

export default UserList;
