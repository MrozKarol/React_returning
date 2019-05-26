//App Counter liczba kliknieć

class Counter extends React.Component {

    state = {
       count: 0,
       result: 0,
        

    }

   handleMathClick(type,number){
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
            <React.Fragment>
                <button onClick={this.handleMathClick.bind(this, 'minus', 1)} >-1</button>
                <button onClick={this.handleMathClick.bind(this, 'reset', 0)} >reset wyniku</button>
                <button onClick={this.handleMathClick.bind(this, 'plus', 1)} >+1</button>
                <p >Liczba kliknięć:{this.state.count}</p>
                <p>Wynik:{this.state.result }</p>
            </React.Fragment>
        )
    }
}
ReactDOM.render(<Counter />, document.getElementById('root'))