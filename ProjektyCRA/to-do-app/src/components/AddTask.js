import React, { Component } from 'react';
import './AddTask.css'
class AddTask extends Component {
    minDate = new Date().toISOString().slice(0, 10)
    state = {
        text: '',
        checked: false,
        date: this.minDate
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleChangeDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }


    render() {
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        console.log(maxDate);
        maxDate = maxDate + "-12-31"
        return (
            <div className="form">
                <input type="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.handleText} />
                <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox} />
                <label htmlFor="important">Prioeytet</label>
                <br />
                <label htmlFor="date"> Do kiedy zrobić</label>
                <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleChangeDate} />
                <br />
                <button>DODAJ</button>
            </div>
        );
    }
}

export default AddTask;