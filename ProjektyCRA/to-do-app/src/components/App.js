import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList'


class App extends Component {
  state = {
    task: [
      {
        id: 0,
        text: 'zagrać w gre Tomb Rider :)',
        date: '2019-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'nauczyć sie reacta :)',
        date: '3001-01-01',
        important: true,
        active: true,
        finishDate: null,
      }, {
        id: 3,
        text: 'pozdrowić Damiana :)',
        date: '2020-01-01',
        important: false,
        active: true,
        finishDate: null,
      }

    ]
  }

  delateTask =()=>{
    console.log('delate task')
  }

  changeTaskStatus =()=>{
    console.log('change task status')
  }
  render() {
    return (
      <div>
        działa
      <AddTask />
        <TaskList  tasks={this.state.task} delate={this.delateTask} change={this.changeTaskStatus} />
      </div>);
  }
}

export default App;
