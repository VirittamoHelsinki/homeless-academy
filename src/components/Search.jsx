import React from 'react';
import { Icon } from '@iconify/react';

function Search(props) {
  return (
    <div className='border rounded-2xl p-3 flex justify-between items-center text-center md:max-w-lg lg:self-end lg:w-2/5'>
      <input
        className='outline-none w-full'
        placeholder='Search' 
        onChange={props.handleSearch}
      />
      <Icon icon="material-symbols:search" color='gray'/>
    </div>
  );
}

export default Search;
