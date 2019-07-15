import React, { Component } from 'react';
import './App.css';
import Word from './Word';

class App extends Component {
  state = {
    // SYMULACJA POBRANIA DANYCH
    words: [
      {
        "id": 1,
        "en": "cat",
        "pl": "kocieł"
      },
      {
        "id": 2,
        "en": "dog",
        "pl": "pieseł"
      },
      {
        "id": 3,
        "en": "fish",
        "pl": "rybka"
      }
    ]
  }
  render() {
    const words = this.state.words.map(word => (
      <Word key={word.id} english={word.en} polish={word.pl} />
    ))
    return (
      <ul>
        {words}
      </ul>
    );
  }
}

export default App;