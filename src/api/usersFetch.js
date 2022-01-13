export const usersFetch = (page = 1, query = "") =>
  `https://randomuser.me/api/?results=25&page=${page}${query}`;
