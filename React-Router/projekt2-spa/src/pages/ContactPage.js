import React, {Component} from 'react';
import '../styles/ContactPage.css';
import {Prompt} from 'react-router-dom'

class ContactPage extends Component {
    state = { 
        value: '',
     }

     handleSubmit = (e) =>{
         e.preventDefault()
         this.setState({
             value: ''
         })
     }
     handleHange = (e) =>{
         this.setState({
             value: e.target.value
         })
     }
    render() { 
        return ( 
            <div className="contact">
                <form onSubmit={this.handleSubmit} >
                    <h3>Napisz do nas:</h3>
                    <textarea value={this.state.value} onChange={this.handleHange} placeholder='Wpisz wiadomość'></textarea>
                    <button >{this.state.value.length > 0 ? 'Wyślij ;)' : 'Wyślij'}</button>
                </form> 
                <Prompt
                    when={this.state.value}
                    message="Masz niewypełniony formularz, czy napewno chcesz opuścić tą stronę"
                    />
            </div>
         );
    }
}
 
export default ContactPage;