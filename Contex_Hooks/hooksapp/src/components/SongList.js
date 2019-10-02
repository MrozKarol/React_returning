import React, { useState } from "react";
import uuid from "uuid/v1";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "love song", id: 1 },
    { title: "nice song", id: 2 },
    { title: "bad song", id: 3 }
  ]);
  const addSong = () => {
    setSongs([...songs, { title: "new song", id: uuid() }]);
  };
  return (
    <div className="spng-list">
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
};

export default SongList;
