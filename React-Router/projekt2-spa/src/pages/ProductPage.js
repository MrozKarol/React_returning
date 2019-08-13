import React from 'react';
import {Link} from 'react-router-dom';
import Product from '../components/Product'

const ProductsPage = () => {
    return ( 
        <div>
            <div>Strona Produktu</div>
            <Product/>
            <Link to="/products">powrót do listy produktów</Link>
        </div>
     );
}
 
export default ProductsPage;