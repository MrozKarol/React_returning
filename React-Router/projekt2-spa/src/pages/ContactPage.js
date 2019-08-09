import React, {Component} from 'react';

class ContactPage extends Component {
    state = { 
        value: ''
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
                    <button >wyślij</button>
                </form>
            </div>
         );
    }
}
 
export default ContactPage;