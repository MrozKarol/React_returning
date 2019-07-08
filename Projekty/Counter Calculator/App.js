class Counter extends React.Component {
   
    render() {
        console.log("renderowanie Child1")
        return (
            <div>
                <p>
                    Kalkulator mnozy przez dwa, jeśli suma jest mniejsza niz 1000.Po przekroczeniu 1000 Kalkulator
                    mnozy przez 0.5 az ościagnie sumę mniejszą niż jeden.
                    Wtedy ponownie zaczyna mnożyć przez dwa.
                </p>
            </div>
        )
    }
}


ReactDOM.render(<Counter />, document.getElementById("root"));
