import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeHolder, handleChange}) => {
    return (
        <input type='search' placeholder={placeHolder} className='search' onChange={handleChange}/>
               // onChange={(e) => this.setState({searchField: e.target.value})}/>
    );
};
