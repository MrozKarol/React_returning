import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList'


class App extends Component {
  state = {

    tasks: [
      {
        id: 0,
        text: '',
        date: '',
        important: false,
        active: null,
        finishDate: null,
      },

    ]
  }
  //przekazanie id do określenia numeru tasku (patrz komponent Task)
  delateTask = (id) => {
    // console.log('delate task' + id)
    //zrobienie kopi tablicy ze stejtu
    const tasks = [...this.state.tasks];
    //przeszukanie tablicy tasks zeby znalazła indeks
    const index = tasks.findIndex(task => task.id === id);
    // console.log(index)
    // usunieie elementu z tablicy
    tasks.splice(index, 1)
    this.setState({
      tasks: tasks
    })


  }

  changeTaskStatus = (id) => {
    // console.log('change task status' + id);
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks: tasks
    })

  }

  addTask = (text, date, important) => {
    const counter =this.state.tasks.length -1
    // console.log("działa")
    const task = {
      id: counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    }
    this.counter++
    console.log(task)
    console.log(counter)
    this.setState(prevState=>({
      //tworzenie npwej tablicy składająca sie ze wszystkich elementów plus nowy task
      tasks:[...prevState.tasks,task]
    }))
    return true

  }
  render() {
    console.log(this.state.tasks)
    return (

      <div>
        TODO APP
      <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delate={this.delateTask} change={this.changeTaskStatus} />
      </div>);
  }
}

export default App;
