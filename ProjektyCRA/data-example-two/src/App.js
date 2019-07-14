import React from 'react';
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

function App() {
  return (
    <div className="App">
     Działalll
    </div>
  );
}

export default App;
