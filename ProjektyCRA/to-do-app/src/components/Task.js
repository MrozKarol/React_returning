import React from 'react';

const Task = (props) => {
    //destrukteryzacja wyciągnięcie z props task patrz Task List
    const { text, date } = props.task
    return (
        <div>
            <p>
                <strong>{text}</strong> - do  <span>{date} </span>
                <button onClick={props.change}>Zostało zrobione</button>
                <button onClick={props.delate}>X</button>
            </p>
        </div>
    );
}

export default Task;