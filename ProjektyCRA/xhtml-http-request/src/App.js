import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest(); /*tworzenie instanicji obiektu*/
    //metoda open która otwiera połączenie,GET: określenie metody, określenie adresu, 
    //true- czy połączenie ma być asynchroniczne
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    //send()wysłanie w nawiasie null 'nic pozatym co napisaliśmy'
    xhr.send(null);
    //onload: co ma sie wydarzyć w pomencie kiedy otrzymamy odpowiedź od serwera
    xhr.onload = () => {
      // console.log(xhr.status) //sprawdzenie statusu
      // console.log(xhr.response) // sprawdzenie odpowiedzi

      //sprawdzenie statusu, przypisanie do zmiennej users dzejsona i użycie metody parse
      //która zamienia stringa na obiekt (parsujemy odpowiedź response)
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response)
        console.log(users)
      }
    }
  }

  render() {
    return (
      <div className="App">
        j
    </div>
    );
  }
}

export default App;
