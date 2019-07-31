import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList'


class App extends Component {
  counter = 6
  state = {

    tasks: [
      {
        id: 0,
        text: 'zagrać w gre Tomb Rider :)',
        date: '2019-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'nauczyć sie reacta :)',
        date: '3001-01-01',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'pozdrowić Damiana :)',
        date: '2020-01-01',
        important: false,
        active: false,
        finishDate: null,
      },
      {
        id: 3,
        text: 'pozdrowić Janka :)',
        date: '2020-01-01',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: 'pozdrowić Bartka C. :)',
        date: '2020-01-01',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: 'pozdrowić Pawła M :)',
        date: '2020-01-01',
        important: false,
        active: true,
        finishDate: null,
      }

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
    // console.log("działa")
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    }
    this.counter++
    console.log(task)
    this.setState(prevState=>({
      //tworzenie npwej tablicy składająca sie ze wszystkich elementów plus nowy task
      tasks:[...prevState.tasks,task]
    }))
    return true

  }
  render() {
    return (
      <div>
        TODO APP
      <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delate={this.delateTask} change={this.changeTaskStatus} />
      </div>);
  }
}

export default App;
