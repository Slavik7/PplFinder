import React, { useState } from "react";
import * as S from "./style";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import { FormControl, TextField, InputAdornment } from "@material-ui/core";

const Search = ({ searchText, setSearchText }) => {
  return (
    <TextField
      label="User Search"
      value={searchText}
      onChange={(e) => {
        setSearchText(e.target.value);
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlined />
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  );
};

export default Search;
