import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'; // used only for the hover button

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
   const inputRef=useRef();
  return (
   <form className='addForm' onSubmit={handleSubmit}>
    <label htmlFor='addItem'>Add Item</label>
    <input
        autoFocus
        ref={inputRef} // it is reccomended to be used  
        id='addItem'
        type='text'
        placeholder='AddItem'
        required
        value={newItem} // this is the value taken as props from App
        onChange={(e)=>setNewItem(e.target.value)} // sets the new value 
        />

        <button 
        type='submit'
        aria-label='Add Item'
            onClick={()=>inputRef.current.focus()}
            >
            <FaPlus/></button>


   </form>
  )
}

export default AddItem;
