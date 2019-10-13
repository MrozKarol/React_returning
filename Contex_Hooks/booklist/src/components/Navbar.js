import React,{useContext} from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = () => {
    //dostęp tylko do ksiązek za pomocą destrukteryzacji
  const {books} = useContext(BookContext)
    return ( 
        <div className="navbar">
            <h1>Reading List</h1>
            <p>Currently you have {books.length} books to geth through...</p>
        </div>
     );
}
 
export default Navbar;