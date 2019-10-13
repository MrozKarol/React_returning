import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'witcher wild hund', author: 'andrzej sabkowski', id: 1 },
        { title: 'game od thrones', author: 'gorge r.r. martin', id: 1 }
    ])
    const addBook = (title, author) => {
        setBooks([...books, { title: title }, { author: author }, { id: uuid() }])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }
    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;
