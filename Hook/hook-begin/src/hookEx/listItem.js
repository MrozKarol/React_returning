import React from "react";


const ListItem = () => {

    const [items] =React.useState({
        item1: 'apple',
        item2: 'orange',
        item3: 'banana',
      })


   

    return ( 
        <div>
            <ul>
               <li>{items.item1}</li>
               <li>{items.item2}</li>
               <li>{items.item3}</li>
            </ul>
        </div>
     );
}
 
export default ListItem;