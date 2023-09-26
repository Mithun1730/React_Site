import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef = useRef()
  return (
    <form action="" className='addform' onSubmit={handleSubmit}>
        <label htmlFor="addItem"> Add Item </label>
        <input type="text"
        autoFocus 
        ref={inputRef}
        id='addItem'
        typeof='text' 
        placeholder='eg: Coding'
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        />
        <button type='submit' onClick={()=>inputRef.current.focus()} aria-label='Add Item'>
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem