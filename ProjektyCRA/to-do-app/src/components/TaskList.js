import React from 'react';
import Task from './Task'

const TaskList = (props) => {
    //zwrócenie tablicy z active metoda filter, póżniej wyświetlenie metoda map
    const active = props.tasks.filter(task => task.active === true)
    active.sort((a, b) => {
        a = a.text.toLowerCase();
        b = b.text.toLowerCase();

        if (a < b) return -1;
        if (a > b) return 1;
        return 0
    })
    const activeTasks = active.map(task => (
        <Task key={task.id} task={task} delate={props.delate} change={props.change} />
    ))
    //zwrócenie tablicy z !active metoda filter, później wyświetlenie
    const done = props.tasks.filter(task => task.active === false)
    done.sort((a, b) => b.finishDate - a.finishDate)
    const doneTasks = done.map(task => (
        <Task key={task.id} task={task} delate={props.delate} change={props.change} />
    ))






    done.sort((a, b) => b.finishDate - a.finishDate)

    return (
        <div>
            <div className="active">
                <h1>Zadania do zrobienia</h1>
                {activeTasks.length > 0 ? activeTasks : <p>nie masz nic do roboty ;)</p>}
            </div>
            <div className="done">
                <h3>Zadania zrobione <em>{done.length}</em></h3>
                {doneTasks.length > 5 && <span>wyświetlonych jest jedynie 5 ostatnich elemntów</span>}
                {doneTasks.slice(0, 5)}
            </div>
        </div>

    );
}

export default TaskList;