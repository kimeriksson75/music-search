import {
  SEARCH_SONGS_BY_LYRICS,
  GET_ARTIST_BY_ID,
  GET_ALBUM_BY_ID,
  GET_ARTIST_ALBUMS_BY_ID,
  SET_LOADING,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_SONGS_BY_LYRICS:
      return {
        ...state,
        tracks: action.payload,
        loading: false,
      };
    case GET_ARTIST_BY_ID:
      return {
        ...state,
        artist: action.payload,
        loading: false,
      };
    case GET_ALBUM_BY_ID:
      return {
        ...state,
        album: action.payload,
        loading: false,
      };
    case GET_ARTIST_ALBUMS_BY_ID:
      return {
        ...state,
        albums: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
