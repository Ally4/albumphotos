import React from 'react';
import Button from '../UI/Button/Button';
import Input from '../InputField';
import './Searchbar.scss';

const SearchBar = ({ value, onchange, onclick, inputValid }) => {
  return (
    <div className='search-bar'>
      <Input type='text' placeholder='Write here the id' value={value} onchange={onchange} />

      <Button onclick={onclick} disabled={!inputValid}> Search photos</Button>
    </div>
  );
};

export default SearchBar;
