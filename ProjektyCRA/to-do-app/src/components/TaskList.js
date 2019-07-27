import React from 'react';
import Task from './Task'

const TaskList = (props) => {
    //zwrócenie tablicy z active metoda filter, póżniej wyświetlenie metoda map
    const active = props.tasks.filter(task => task.active === true)
    const activeTasks = active.map(task => (
        <Task key={task.id} task={task} delate={props.delate} change={props.change} />
    ))
    //zwrócenie tablicy z !active metoda filter, później wyświetlenie
    const done = props.tasks.filter(task => task.active === false)
    const doneTasks = done.map(task => (
        <Task key={task.id} task={task} delate={props.delate} change={props.change} />
    ))

    return (
        <div>
            <div className="active">
                <h1>Zadania do zrobienia</h1>
                {activeTasks}
            </div>
            <div className="done">
                <h3>Zadania zrobione(0)</h3>
                {doneTasks}
            </div>
        </div>

    );
}

export default TaskList;