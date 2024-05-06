import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchActions, itemActions } from "../store/store";

const FetchItem = () => {
  const dispatch = useDispatch();
  async function itemsFetching() {
    const itemsFetch = await axios.get("http://localhost:8080/products/items");
    dispatch(fetchActions.setLoadingStateTrue());
    const data = itemsFetch.data.items[0];
    dispatch(itemActions.addInitialItems(data));
  }
  useEffect(() => {
    itemsFetching();
  }, []);

  return <></>;
};

export default FetchItem;
