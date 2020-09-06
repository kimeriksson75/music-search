import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MusicmatchContext from '../../context/musicmatch/musicmatchContext';
import Spinner from '../layout/Spinner';
import { Card } from 'antd';

import { Button } from 'antd';

const Artist = (props) => {
  const musicmatchContext = useContext(MusicmatchContext);
  const {
    artist,
    getArtist,
    albums,
    getArtistAlbums,
    loading,
  } = musicmatchContext;
  const {
    match: {
      params: { id },
    },
  } = props;
  useEffect(() => {
    getArtist(id);
  }, []);

  useEffect(() => {
    getArtistAlbums(id);
  }, []);
  const { Meta } = Card;
  if (loading) return <Spinner />;
  return (
    <div>
      <h1>{artist.artist_name}</h1>
      <Link to='/'>Back to search</Link>
      {albums.map((album) => (
        <Card
          key={album.album.album_id}
          style={{ width: 240 }}
          cover={<img alt='cover' src={album.album.album_coverart_100x100} />}
        >
          <Meta
            title={album.album.album_name}
            description={album.album.album_label}
          />
        </Card>
      ))}
    </div>
  );
};

export default Artist;
