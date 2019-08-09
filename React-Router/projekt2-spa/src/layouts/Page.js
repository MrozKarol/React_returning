import React from 'react';
import { Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
const Page = () => {
    return ( 
        <Route path="/" exact component ={HomePage}/>
     );
}
 
export default Page;