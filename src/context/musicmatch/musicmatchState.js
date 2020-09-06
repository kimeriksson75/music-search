import React, { useReducer } from 'react';
import axios from 'axios';
import MusicmatchContext from './musicmatchContext';
import MusicmatchReducer from './musicmatchReducer';

import {
  SEARCH_SONGS_BY_LYRICS,
  GET_ARTIST_BY_ID,
  GET_ALBUM_BY_ID,
  GET_ARTIST_ALBUMS_BY_ID,
  SET_LOADING,
} from '../types';

const MusicmatchState = (props) => {
  const iniitialState = {
    tracks: [],
    artist: [],
    albums: [],
    album: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(MusicmatchReducer, iniitialState);

  const searchSongsByLyrics = async (str) => {
    setLoading();

    const res = await axios.get(
      `http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${str}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_CLIENT_ID}`
    );
    dispatch({
      type: SEARCH_SONGS_BY_LYRICS,
      payload: res.data.message.body.track_list,
    });
  };
  const getArtist = async (id) => {
    setLoading();

    const res = await axios.get(
      `http://api.musixmatch.com/ws/1.1/artist.get?artist_id=${id}&apikey=${process.env.REACT_APP_MM_CLIENT_ID}`
    );
    dispatch({
      type: GET_ARTIST_BY_ID,
      payload: res.data.message.body.artist,
    });
  };
  const getAlbum = async (id) => {
    setLoading();

    const res = await axios.get(
      `http://api.musixmatch.com/ws/1.1/album.get?album_id=${id}&apikey=${process.env.REACT_APP_MM_CLIENT_ID}`
    );
    dispatch({
      type: GET_ALBUM_BY_ID,
      payload: res.data.message.body.album,
    });
  };
  const getArtistAlbums = async (id) => {
    setLoading();

    const res = await axios.get(
      `http://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${id}&s_release_date=desc&g_album_name=1&apikey=${process.env.REACT_APP_MM_CLIENT_ID}`
    );
    dispatch({
      type: GET_ARTIST_ALBUMS_BY_ID,
      payload: res.data.message.body.album_list,
    });
  };
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
      payload: null,
    });
  };
  return (
    <MusicmatchContext.Provider
      value={{
        tracks: state.tracks,
        artist: state.artist,
        albums: state.albums,
        album: state.album,
        loading: state.loading,
        searchSongsByLyrics,
        getArtist,
        getAlbum,
        getArtistAlbums,
        setLoading,
      }}
    >
      {props.children}
    </MusicmatchContext.Provider>
  );
};

export default MusicmatchState;
