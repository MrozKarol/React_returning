import React,{Component} from 'react';
import './App.css';
//profesjonalna baza danych ;)
const data =[
  {id:1, title:'Wiadomość numer 1', body:'Zawartość wiadomości numer 1...'},
  {id:2, title:'Wiadomość numer 2', body:'Zawartość wiadomości numer 2...'},
]

setInterval(()=>{
  //długość tablicy + 1
const index = data.length + 1
//pushowanie obiektu do tablicy
data.push({
  id:index,
  title:`Wiadomość numer 2 ${index}`,
  body:`Zawartość wiadomości numer ${index}...`
})
//Wyświetlenie tablicy w consoli
console.log(data)
},2000)

class App extends Component {
  state = { 
    //uzycie rest operatora dla skopiowania tablicy, samo odwołanie do tablicy data zrobiłoby referencje
    comments: [...data]
   }

  render() { 
    const comments = this.state.comments.map(comment =>(
      //uzycie key
      <div key={comment.id}> 
        <h3>{comment.title}</h3>
        <h4>{comment.body}</h4>
      </div>
    ))

    return ( 
      //reverse() odwrotne umieszczenie elementów tablicy
      <div className="App">{comments.reverse()}</div>
     );
  }
}
 
export default App;


