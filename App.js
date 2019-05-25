//Pokazywanie wiadomości za pomocą przycisku

class Message extends React.Component {

//    constructor(props){
//        super(props);
//        this.state = {
//            messageIsActive: false
//        }
//        this.handleMessageButton = this.handleMessageButton.bind(this)
//    }

     state = {
        messageIsActive: false
     }

   handleMessageButton =() => {
       
       this.setState({
           messageIsActive: !this.state.messageIsActive
       })
   }
    render(){
     console.log(this.state.messageIsActive)
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt iure ea nam officiis, aliquid ipsa earum enim sit natus fugit consequuntur maiores quibusdam vitae iste quo, incidunt deserunt eveniet delectus.'    
        return(
            <>
            <button onClick={this.handleMessageButton} >
            {this.state.messageIsActive ? 'Ukryj' : 'Pokaż'}
            </button>
            {/* <p>{this.state.messageIsActive && text}</p> */}
            {this.state.messageIsActive ? <p>{text}</p> : null}
            </>
        )
    }
}
ReactDOM.render(<Message />, document.getElementById('root'))