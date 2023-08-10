import React from 'react'
import './index.css'
const SearchCard = ({name , follow}) => {
  const handleFollow = async () => {
    const response = await axios.post('http://127.0.0.1:8000/api/follow', data,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          
        },
      });
  }
  return (
    <div className='search flex'>
        <span>{name}</span>
        <span onClick={handleFollow}>{follow}</span>
    </div>
  )
}

export default SearchCard