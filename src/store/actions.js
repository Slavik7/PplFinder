import axios from "axios";
import { usersFetch } from "api";
import * as storage from "../util/storage";

export const setIsLoading = () => {
  return { type: "IS_LOADING" };
};
export const unSetIsLoading = () => {
  return { type: "LOADING_FINISH" };
};
export const newUsers = async (dispatch, query = "") => {
  dispatch(setIsLoading());
  const newUsers = await axios.get(usersFetch(1, query));
  dispatch(unSetIsLoading());
  dispatch({ type: "NEW_USERS", payload: { users: newUsers.data.results } });
};

export const moreUsers = async (dispatch, page = 1, query = "") => {
  dispatch(setIsLoading());
  const newUsers = await axios.get(usersFetch(page, query));
  dispatch({ type: "MORE_USERS", payload: { users: newUsers.data.results } });
  dispatch(unSetIsLoading());
};

export const addUser = (user) => {
  return { type: "ADD_USER", payload: { user: user } };
};
export const removeUser = (user) => {
  return { type: "REMOVE_USER", payload: { user: user } };
};
export const updateQuery = (query) => {
  return { type: "UPDATE_QUERY", payload: { queryStr: query } };
};
export const updatePage = () => {
  return { type: "UPDATE_PAGE" };
};

export const addFavorite = (user) => {
  return { type: "ADD_FAVORITE", payload: { user: user } };
};
export const removeFavorite = (user) => {
  return { type: "REMOVE_FAVORITE", payload: { user: user } };
};
export const updateFavorites = (favorites) => {
  return { type: "UPDATE_FAVORITES", payload: { favorites: favorites } };
};
export const updateFavoritesPageUsers = (index) => {
  return { type: "UPDATE_USERS", payload: { index: index } };
};

export const favoritePage = () => {
  return { type: "FAVORITE_PAGE" };
};

export const moreFavorites = () => {
  return { type: "MORE_FAVORITES" };
};
export const setFavoritesByStorage = () => {
  const data = storage.get("favorites");
  const favorites = data && data.length ? JSON.parse(data) : [];
  return { type: "SET_FAVORITES", payload: { favorites: favorites } };
};

export const searchedFavorites = (text, users) => {
  const searchedUsers = users.filter((user, index) => {
    const fullName = `${user.name.first} ${user.name.last}`;

    return fullName.toLowerCase().search(text.toLowerCase()) !== -1;
  });
  return { type: "UPDATE_USERS", payload: { users: searchedUsers } };
};
