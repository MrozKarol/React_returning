import React from 'react';

const Task = (props) => {
    //destrukteryzacja wyciągnięcie z props task patrz Task List
    const { text, date, id } = props.task
    return (
        <div>
            <p>
                <strong>{text}</strong> - do  <span>{date} </span>
                <button onClick={() => props.change(id)}>Zostało zrobione</button>
                <button onClick={() => props.delate(id)}>X</button>
            </p>
        </div>
    );
}

export default Task;