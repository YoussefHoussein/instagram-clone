import React from 'react'
import './index.css'
const SearchCard = ({name , follow}) => {
  return (
    <div className='search flex'>
        <span>{name}</span>
        <span>{follow}</span>
    </div>
  )
}

export default SearchCard