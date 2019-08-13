import React from 'react';

const Product = (props) => {
    return ( 
        <article className="products">
            <h1>{props.id}</h1>
        </article>
     );
}
 
export default Product;