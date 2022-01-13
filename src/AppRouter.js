import React, { useEffect, useReducer } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import Favorites from "pages/Favorites";
import { reducer } from "store";
import { initialState } from "store";
import { Context } from "util/context";
import { setFavoritesByStorage } from "store/actions";

const AppRouter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch(setFavoritesByStorage());
  }, []);
  return (
    <Context.Provider value={{ state: state, dispatch: dispatch }}>
      <ThemeProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default AppRouter;
