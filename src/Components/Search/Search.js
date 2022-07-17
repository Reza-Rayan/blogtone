import React from 'react';
import './Search.css'
//adding icon
import search from '../../Assets/Icons/search.svg'


const Search = () =>{
    return(
        <div>
            <a href='#' className='search mx-1'>
                <img src={search} width={20} />
            </a>
        </div>
    )
}

export default Search