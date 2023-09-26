import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItems = ({n,handleCheck,handleDelete}) => {
  return (
    <li className='item' key={n.id}>
                <input type="checkbox" 
                onChange={()=>handleCheck(n.id)}
                checked ={n.checked}/>
                <label 
                style={(n.checked)?{textDecoration:"line-through", textDecorationColor:'red'} : null}
                 htmlFor="" 
                 onDoubleClick={()=>handleCheck(n.id)}>{n.item}</label>
                <FaTrashAlt role='button'  onClick={()=>handleDelete(n.id)}
                tabIndex='0'
                aria-label={`Delete ${n.item}`}/>
            </li>
  )
}

export default LineItems