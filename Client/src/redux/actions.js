import axios from "axios";

export const GET_CHAR = "GET_CHAR";
export const REMOVE_CHAR = "REMOVE_CHAR";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const LOGIN = "LOGIN";
export const ALL_FAV = "ALL_FAV";

export const getCharById = (id) => {
  const apiUrl = `http://localhost:3001/rickandmorty/character/${id}`;

  return async (dispatch) => {
    try {
      const response = await axios(apiUrl);
      const char = response.data;
      return dispatch({ type: GET_CHAR, payload: char });
    } catch (error) {
      console.error("Error al realizar la solcitud:", error);
    }
  };
};

export const removeChar = (id) => {
  return {
    type: REMOVE_CHAR,
    payload: id,
  };
};

export const getAllFav = () => {
  const apiUrl = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios(apiUrl);
      return dispatch({ type: ALL_FAV, payload: data });
    } catch (error) {
      console.error("Error al realizar la solcitud:", error);
    }
  };
};

export const addFav = (character) => {
  const apiUrl = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(apiUrl, character);
      return dispatch({ type: ADD_FAV, payload: data });
    } catch (error) {
      console.error("Error al realizar la solcitud:", error);
    }
  };
};

export const removeFav = (id) => {
  const apiUrl = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(apiUrl);
      return dispatch({ type: REMOVE_FAV, payload: data });
    } catch (error) {
      console.error("Error al realizar la solcitud:", error);
    }
  };
};

export const login = (userData) => {
  const { email, password } = userData;
  const apiUrl = "http://localhost:3001/rickandmorty/login";
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `${apiUrl}?email=${email}&&password=${password}`
      );
      return dispatch({ type: LOGIN, payload: data });
    } catch (error) {
      console.error("Error al realizar la solcitud:", error);
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
