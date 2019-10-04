import React, { useState, useEffect } from "react";
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
  const addSong = title => {
    setSongs([...songs, { title: title, id: uuid() }]);
  };

  const [age, setAge] = useState(20);

  //useEfect jest uruchamiany za każdym razem przy renderowaniu komponentu , za kazdym razem zmiany danych w komponecie
  useEffect(() => {
    console.log("useEffect hook ran", songs);
  }, [songs]);
  //dodanie drugiegi parametru [songs] ogranicza renderowanie do dnego elementu

  useEffect(() => {
    console.log("useEffect hook ran", age);
  }, [age]);
  return (
    <div className="spng-list">
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
