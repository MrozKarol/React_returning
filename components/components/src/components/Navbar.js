import React, { Component } from 'react';
import './Navbar.css';


class App extends Component {
    state = {
        showMenu: false,
        className: "nav-links"
    };

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
        if (this.state.showMenu === true) {
            this.setState({
                className: "nav-links open"
            })
        } else if (this.state.showMenu === false) {
            this.setState({
                className: "nav-links"
            })
        }
    }


    render() {

        return (
            <div>
                <nav>
                    <div className="hamburger" onClick={this.toggleMenu} >
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <ul className={this.state.className}>
                        <li><a href="#l">About</a></li>
                        <li><a href="#k">Contact</a></li>
                        <li><a href="#i">Projects</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default App;