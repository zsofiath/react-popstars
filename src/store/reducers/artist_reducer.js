import { GET_ARTISTS_ALL } from "../Types";
export default function red(state = {}, action){
    switch (action.type) {
        case GET_ARTISTS_ALL:
            return {...state, artistList: action.payload}
        default:
            return state;
    }
}