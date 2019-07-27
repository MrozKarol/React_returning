import React from 'react';

const Task = (props) => {
    const importantStle = {
        color: 'red',
    }
    //destrukteryzacja wyciągnięcie z props task patrz Task List
    const { text, date, id, active, important, finishDate } = props.task;
    if (active === true) {
        return (
            <div>
                <p>
                    <strong style={important ? importantStle : null}>{text}</strong> - do  <span>{date} </span>
                    <button onClick={() => props.change(id)}>Zostało zrobione</button>
                    <button onClick={() => props.delate(id)}>X</button>
                </p>
            </div>
        );
    } else {
        //wyodrębnienie godziny i daty
        const finish = new Date(finishDate).toLocaleString()
        return (
            <div>
                <p>
                    <strong >{text}</strong> - do  <em>{date} </em>
                    <br />
                    -potweirdzenie wykonania {finish}

                    <button onClick={() => props.delate(id)}>X</button>
                </p>
            </div>
        );
    }

}

export default Task;