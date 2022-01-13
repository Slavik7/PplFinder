export const set = (title, data) => {
  localStorage.removeItem(title);
  localStorage.setItem(title, JSON.stringify(data));
};

export const get = (title) => {
  return localStorage.getItem(title);
};
