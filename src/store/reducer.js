import { Satellite } from "@material-ui/icons";

export const initialState = {
  users: [],
  favorites: [],
  page: 1,
  queryStr: "",
  isLoading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_USERS": {
      return { ...state, users: [...action.payload.users], page: 1 };
    }
    case "ADD_USER": {
      return { ...state, users: [...state.users, action.payload.user] };
    }
    case "REMOVE_USER": {
      return {
        ...state,
        users: [
          ...state.users.filter((user) => user.email !== action.payload.user.email),
        ],
      };
    }
    case "ADD_FAVORITE": {
      return { ...state, favorites: [...state.favorites, action.payload.user] };
    }
    case "REMOVE_FAVORITE": {
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((user) => user.email !== action.payload.user.email),
        ],
      };
    }
    case "UPDATE_FAVORITES": {
      return { ...state, favorites: [...action.payload.favorites] };
    }
    case "SET_FAVORITES": {
      return {
        ...state,
        favorites: [...action.payload.favorites],
      };
    }
    case "MORE_USERS": {
      return {
        ...state,
        users: [...state.users, ...action.payload.users],
        page: state.page + 1,
      };
    }
    case "FAVORITE_PAGE": {
      return { ...state, users: [...state.favorites.slice(0, 25)] };
    }
    case "UPDATE_USERS": {
      return { ...state, users: [...action.payload.users] };
    }
    case "MORE_FAVORITES": {
      return {
        ...state,
        users: [
          ...state.users,
          ...state.favorites.slice(state.users.length, 25 * (state.page + 1)),
        ],
        page: state.page + 1,
      };
    }
    case "UPDATE_QUERY": {
      return { ...state, queryStr: action.payload.queryStr };
    }
    case "UPDATE_PAGE": {
      return { ...state, page: state.page++ };
    }
    case "IS_LOADING": {
      return { ...state, isLoading: true };
    }
    case "LOADING_FINISH": {
      return { ...state, isLoading: false };
    }
    default: {
      return { ...state };
    }
  }
};
