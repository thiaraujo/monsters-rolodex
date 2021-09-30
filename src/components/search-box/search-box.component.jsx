import React from "react";

import './search-box.style.css'

export const SearchBox = ({ placeholder , handleChange}) =>(
    <input 
        type='text' 
        className='search'
        placeholder={placeholder} 
        onChange={handleChange}/>
)