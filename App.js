//App Counter liczba kliknieć

class Counter extends React.Component {

    state = {
       count: 0,
       result: 0,
        

    }

   handleMathClick = (type,number) => {
       if(type === 'minus'){
           this.setState(prevState =>(
               {
               count: prevState.count + 1,
               result: prevState.result - number
               }
           ));
       }else if(type ==='plus'){
        this.setState(prevState =>(
            {
            count: prevState.count + 1,
            result: prevState.result + number
            }
            ));
       }else if (type ==='reset'){
           this.setState(prevState =>(
               {
                count: prevState.count + 1,
                result: 0
               }
           ))
       }     
   }

    render(){
        return(
            <React.Fragment  >
                <MathButton 
                 name="-1"
                 number="1"
                 type="minus" 
                 click={this.handleMathClick } />
                 <MathButton 
                 name="Reset"
                 type="reset" 
                 click={this.handleMathClick } />
                 <MathButton 
                 name="+1"
                 number="1"
                 type="plus" 
                 click={this.handleMathClick } />
                 
                 
                <p >Liczba kliknięć:{this.state.count}</p>
                <p>Wynik:{this.state.result }</p>
            </React.Fragment>
        )
    }
}

const MathButton = (props) => {
    const number = parseInt(props.number)
    return(
 <button onClick={() => props.click(props.type, number)} >{props.name}</button>
 )
}

ReactDOM.render(<Counter />, document.getElementById('root'))