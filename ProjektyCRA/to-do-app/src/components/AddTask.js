import React, { Component } from 'react';
import './AddTask.css'
class AddTask extends Component {
    state = { 
        text:'',
        checked: false,
     }
    render() { 
        return ( 
            <div className="form">
             <input type="text" placeholder="dodaj zadanie" value={this.state.text}/>
             <input type="checkbox" checked={this.state.checked} id="important"/>
             <label htmlFor="important">Prioeytet</label>
             <br/>
             <label htmlFor="date"> Do kiedy zrobić</label>
             <input type="date" value="2019-08-01" min="2019-09-09" max="2020-01-05" />
             <br/>
             <button>DODAJ</button>
            </div>
        );
    }
}
 
export default AddTask;