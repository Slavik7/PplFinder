import React, { useContext, useEffect, useState } from "react";
import CheckBox from "components/CheckBox";
import * as S from "./style";
import { Context } from "util/context";
import { newUsers, updateQuery } from "store/actions";
const Filters = () => {
  const { state, dispatch } = useContext(Context);
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    if (filters.length > 0) {
      dispatch(updateQuery(`&nat=${filters.join()}`));
    } else {
      dispatch(updateQuery(``));
    }
  }, [filters]);

  useEffect(() => {
    dispatch(newUsers(dispatch, state.queryStr));
  }, [state.queryStr]);

  const filtersUpdateHandler = (value, isChecked) => {
    if (isChecked) {
      setFilters((f) => [...f, value]);
    } else {
      setFilters((f) => f.filter((f) => f !== value));
    }
  };
  //    IE, IR, NO, NL, NZ, TR, US
  return (
    <S.Filters>
      <CheckBox value="BR" label="Brazil" onChange={filtersUpdateHandler} />
      <CheckBox value="AU" label="Australia" onChange={filtersUpdateHandler} />
      <CheckBox value="CA" label="Canada" onChange={filtersUpdateHandler} />
      <CheckBox value="DE" label="Germany" onChange={filtersUpdateHandler} />
      <CheckBox value="DK" label="Denmark" onChange={filtersUpdateHandler} />
      <CheckBox value="ES" label="Spain" onChange={filtersUpdateHandler} />
      <CheckBox value="FR" label="France" onChange={filtersUpdateHandler} />
      <CheckBox value="GB" label="United Kingdom" onChange={filtersUpdateHandler} />
    </S.Filters>
  );
};

export default Filters;
