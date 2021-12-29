import { GET_ARTISTS_ALL, GET_ARTISTS_DETAIL, GET_ARTISTS_SEARCH } from "../Types";
export default function red(state = {}, action) {
  switch (action.type) {
    case GET_ARTISTS_ALL:
      return { ...state, artistList: action.payload };
    case GET_ARTISTS_SEARCH:
      return { ...state, artistList: action.payload };
      case GET_ARTISTS_DETAIL:
      return { ...state, artistData: action.payload };
    default:
      return state;
  }
}
