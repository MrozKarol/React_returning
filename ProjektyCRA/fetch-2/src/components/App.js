import React, { Component } from 'react';
import './App.css';
import UsersList from './UsersList'
import ButtonFetchUsers from './ButtonFetchUsers'

const API = "http://randomuser.me/api/?results=1";
const proxyurl = "https://cors-anywhere.herokuapp.com/" //rozwiazanie problemu z 'Access-Control-Allow-Origin'

class App extends Component {
  state = {
    users:[]
  }
  handleDataFetch = () =>{
    // console.log("click")
    fetch(proxyurl + API) //fetchowanie API które zwraca promisa
    //tchen czyli później , sprawdzenie warunkowe statusu obiektu response
      .then(response =>{
        if(response.text){
          return response;
        }//jak będzie zły status wyświetli status zły
        throw Error(response.ok)
      })
      //jak jest wszystko ok bierzemy responsa i przy uzyciu json() wyciąamy go i zamieniamy na stringa
      .then(response => response.json())
      //nasze dane 'string' przypisujemy do users w stjcie za pomoca this.setState
      .then(data =>{
        this.setState({
          users: data.results
        })
      })
      //jak coś sie wykrzaczy pokazuje komunikat
      .catch(error => console.log(error + " coś nie tak "))

  }
  render() {
    const users = this.state.users
    return (
      <div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
