import React, { useContext } from 'react';
import MusicmatchContext from '../../context/musicmatch/musicmatchContext';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
const Tracks = () => {
  const musicmatchContext = useContext(MusicmatchContext);
  const { tracks, loading } = musicmatchContext;
  console.log(tracks);
  if (loading) return <Spinner />;
  return (
    <div>
      {tracks.map((track) => (
        <Card key={track.track.track_id} title={track.track.track_name}>
          {console.log(track.track)}
          <Link to={`/artist/${track.track.artist_id}`}>
            {track.track.artist_name}
          </Link>
          <br />
          <Link to={`/album/${track.track.album_id}`}>
            {track.track.album_name}
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default Tracks;
