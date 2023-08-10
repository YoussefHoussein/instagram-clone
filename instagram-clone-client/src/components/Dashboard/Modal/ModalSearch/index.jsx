import React, { useState } from 'react'
import Modal from 'react-modal'
import './index.css'
import SearchCard from '../../searchCard'
import axios from 'axios'
const ModalSearch = ({isOpen , handleCloseSearchModal}) => {
  const [name , setName ] = useState("")
  const [names,setNames] =useState([])
  const [follow, setFollow] =useState("follow")
  const handleSearch = async (e) => {
    setName(e.target.value)
    const data =  new FormData();
    data.append("name",name)
    const response = await axios.post('http://127.0.0.1:8000/api/search', data,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          
        },
      });
      const result = response.data
      result.forEach(element => {
        console.log(element.name);
       setFollow(checkFollow(element.id)) 
       
        setNames([...names,element.name])
        
      });
      
  }
  const checkFollow = async (id) => {
    const data = new FormData()
    data.append("followed_id",id)
    const response = await axios.post('http://127.0.0.1:8000/api/checkFollow', data,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          
        },
      });
      
      return response.data.message;
  }
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={handleCloseSearchModal}
    className="search-modal flex center"
    overlayClassName="search-overlay"
    >
        <div className="search-container flex col">
            <div className="header"><h2>Search</h2></div>
            <div className='input-container'><input type="text" value={name} placeholder='search' onChange={handleSearch}/></div>
            <hr />
            {
              names.map((e,index) => (
                <SearchCard key={index} name = {e} follow={follow}/> )
              )
              
            }
            
        </div>
    </Modal>
  )
}

export default ModalSearch