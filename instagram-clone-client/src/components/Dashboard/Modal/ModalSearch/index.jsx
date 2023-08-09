import React from 'react'
import Modal from 'react-modal'
import './index.css'
import SearchCard from '../../searchCard'
const ModalSearch = ({isOpen , handleCloseSearchModal}) => {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={handleCloseSearchModal}
    className="search-modal flex center"
    overlayClassName="search-overlay"
    >
        <div className="search-container flex col">
            <div className="header"><h2>Search</h2></div>
            <div className='input-container'><input type="text" placeholder='search'/></div>
            <hr />
            <SearchCard />
        </div>
    </Modal>
  )
}

export default ModalSearch