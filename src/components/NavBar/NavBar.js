import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import * as S from "./style";
const NavBar = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const location = window.location.href.split("/");
    if (location[location.length - 1] === "favorites") setValue(1);
  }, []);
  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      style={{ position: "fixed", top: 0, padding: "0 2rem" }}
    >
      <S.NavItems>
        <S.Logo>PplFinder</S.Logo>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Navigation"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Home" index={0} component={Link} to={"/"} />
          <Tab label="Favorites" index={1} component={Link} to={"/favorites"} />
        </Tabs>
      </S.NavItems>
    </AppBar>
  );
};

export default NavBar;
