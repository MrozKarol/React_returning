import React, { useState } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
    //songs tabkic obiktów, setSong dodanie obiektu'piosenki' do dablicy
  const [songs, setSongs] = useState([
    { title: "love song", id: 1 },
    { title: "nice song", id: 2 },
    { title: "bad song", id: 3 }
  ]);

  //title prarametr króry przekazujemy w propsie
  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuid() }]);
  };
  return (
    <div className="spng-list">
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong}/>
    </div>
  );
};

export default SongList;
