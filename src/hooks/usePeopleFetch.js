import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUsers(query = "") {
    setIsLoading(true);
    const response = await axios.get(
      `https://randomuser.me/api/?results=25&page=${page}${reqStr}`
    );

    setIsLoading(false);
    setUsers(response.data.results);
  }

  return { users, isLoading, fetchUsers };
};
