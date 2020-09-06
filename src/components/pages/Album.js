import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MusicmatchContext from '../../context/musicmatch/musicmatchContext';
import Spinner from '../layout/Spinner';
import { Card } from 'antd';

const Album = (props) => {
  const musicmatchContext = useContext(MusicmatchContext);
  const { album, getAlbum, loading } = musicmatchContext;
  const {
    match: {
      params: { id },
    },
  } = props;
  useEffect(() => {
    getAlbum(id);
  }, []);
  const { Meta } = Card;
  console.log(album);
  if (loading) return <Spinner />;
  return (
    <div>
      <h1>{album.album_name}</h1>
      <Link to='/'>Back to search</Link>
      <Card
        key={album.album_id}
        style={{ width: 240 }}
        cover={<img alt='cover' src={album.album_coverart_100x100} />}
      >
        <Meta title={album.album_name} description={album.album_label} />
      </Card>
    </div>
  );
};

export default Album;
