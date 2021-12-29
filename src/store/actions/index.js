import { GET_ARTISTS_ALL } from '../Types';
import axios from 'axios';
const URL = 'http://localhost:3004'

export function artistsListAll(){
    const request = axios.get(`${URL}/artists?_limit=6`).then(resp => resp.data);

    return {
        type: GET_ARTISTS_ALL,
        payload: request
    }
}