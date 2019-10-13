import React,{useContext} from 'react';
import { BookContext } from '../context/BookContext';
import BookDetais from './BookDetais';


const BookList = () => {
    //destrukteryzacja, użycie tylko książek
    const {books} = useContext(BookContext)

    //jezeli długość tablicy jest nie prawdą zwróci nam diwa empty
    return books.length ? ( 
        <div className="book-list">
            <ul>
                 {books.map(book =>(
                     <BookDetais book={book} key={book.id}/>
                 ))}
            </ul>
        </div>
     ) : (<div className="empty">No books to read. Hello free time</div>)
}
 
export default BookList;