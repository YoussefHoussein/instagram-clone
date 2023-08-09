import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import ModalSearch from '../Modal/ModalSearch'
const SideBar = () => {
  const [SearchOpen , setSearchOpen] = useState(false);

  const handleSearchClick = () =>{
    setSearchOpen(true)
    console.log(SearchOpen)
  } 

  const handleCloseSearchModal = () => setSearchOpen(false)
  return (
    <div className='sidebar flex center'>
        <div className='container flex col'>
            <div className="title"><i className='logo'></i></div>
            <div className='sidebar-item flex'>
            <svg className='item-logo' ><path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path></svg>
            <span>Home</span>
            </div>
            <div className='sidebar-item flex' onClick={handleSearchClick}>
            <svg className='item-logo'><path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
            <span>Search</span>
            </div>
            <div className='sidebar-item flex'>
            <svg className='item-logo'><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
            <span>Create</span>
            </div>
        </div>
        <ModalSearch isOpen={SearchOpen} handleCloseSearchModal= {handleCloseSearchModal}/>
        
    </div>
  )
}

export default SideBar