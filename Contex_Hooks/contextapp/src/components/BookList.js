import React, { Component } from 'react';

class BookList extends Component {
    render() {
        return (
            <div className="book-list">
                <ul>
                    <li>Witcher</li>
                    <li>Lord of the Rings</li>
                    <li>Game of Trones</li>
                </ul>
            </div>
        );
    }
}

export default BookList;