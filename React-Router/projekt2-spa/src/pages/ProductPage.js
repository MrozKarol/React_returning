import React from 'react';
import {Link} from 'react-router-dom';
import Product from '../components/Product'
import '../styles/ProductPage.css'

const ProductPage = ({match}) => {
    console.log(match)
    return ( 
        <div className="productPage">
            <h2>Strona Produktu</h2>
            <Product id={match.params.id}/>
            <Link to="/products">powrót do listy produktów</Link>
        </div>
     );
}
 
export default ProductPage;