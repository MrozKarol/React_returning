 import React, {createContext, useState} from 'react';

 export const BookContext = createContext();

 const BookContextProvider = (props) => {
     const [books, setBooks] = useState([
         {title : 'name of the wind', id:1},
         {title : 'star wars', id:2},
         {title : 'lord of the rings', id:3},
         {title : 'harry potter', id:4}
            
     ])
     return ( 
        <BookContext.Provider value={{books}}>
           {props.children}
        </BookContext.Provider>
      );
 }
  
 export default BookContextProvider;