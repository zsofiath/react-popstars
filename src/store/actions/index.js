import { GET_ARTISTS_ALL, GET_ARTISTS_SEARCH, GET_ARTISTS_DETAIL, CLEAR_ARTIST_DETAIL} from '../Types';
import axios from 'axios';
const URL = 'http://localhost:3004'

export function artistsListAll(){
    // const request = axios.get(`${URL}/artists?_limit=6`).then(resp => resp.data);
    let json = require('../../db.json');
    

    return {
        type: GET_ARTISTS_ALL,
        payload: json.artists
    }
}

export function artistsListSearch(keywords){
    // const request = axios.get(`${URL}/artists?q=${keywords}&&_limit=6`).then(resp => resp.data);
    let json = require('../../db.json');
    
    return {
        type: GET_ARTISTS_SEARCH,
        payload: json.artists.filter(artist => artist.name.includes(keywords))
    }
}

export function artistDetail(id) {
    //  const request = axios.get(`${URL}/artists?id=${id}`).then(resp => resp.data);
    let json = require('../../db.json');
    return {
        type: GET_ARTISTS_DETAIL,
        payload: json.artists.filter(artist => artist.id == id)
    }
}

export function clearArtistDetail(id) {
    return {
        type: CLEAR_ARTIST_DETAIL,
        payload: null
    }
}