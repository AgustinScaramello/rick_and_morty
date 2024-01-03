import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  GET_CHAR,
  REMOVE_CHAR,
} from "./actions";

const initialState = {
  allCharacters: [],
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAR:
      const existingCharacter = state.allCharacters.find(
        (character) => character.id === action.payload.id
      );

      if (!existingCharacter) {
        return {
          ...state,
          allCharacters: [...state.allCharacters, action.payload],
        };
      }

      return state;
    case REMOVE_CHAR:
      const filteredChar = state.allCharacters.filter(
        (char) => char.id !== action.payload
      );
      return {
        ...state,
        allCharacters: filteredChar,
      };
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
      };
    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };
    case FILTER:
      const filteredFav = state.myFavorites.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filteredFav,
      };
    case ORDER:
      return {
        ...state,
        myFavorites: state.myFavorites.sort((a, b) =>
          action.payload === "A" ? a.id - b.id : b.id - a.id
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
