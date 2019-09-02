import React, { Component } from 'react';
import './Navbar.css';


class App extends Component {
    state = {
        showMenu: false,
        className: "nav-links",
    };

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
        if (this.state.showMenu === true) {
            this.setState({
                className: "nav-links open fade"
            })
        } else if (this.state.showMenu === false) {
            this.setState({
                className: "nav-links"
            })
        }
    }


    render() {
const fade = {opacity: 1}
        return (
            <div>
                <nav>
                    <div className="hamburger" onClick={this.toggleMenu} >
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <ul className={this.state.className}>
                        <li style={!this.state.showMenu ? fade : null} ><a href="#l">About</a></li>
                        <li style={!this.state.showMenu ? fade : null}><a href="#k">Contact</a></li>
                        <li style={!this.state.showMenu ? fade : null}><a href="#i">Projects</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default App;