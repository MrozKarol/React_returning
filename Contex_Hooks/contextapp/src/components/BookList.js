import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        console.log(this.context);
        return (
            <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui }}>Witcher</li>
                    <li style={{ background: theme.ui }}>Lord of the Rings</li>
                    <li style={{ background: theme.ui }}>Game of Trones</li>
                </ul>
            </div>
        );
    }
}

export default BookList;