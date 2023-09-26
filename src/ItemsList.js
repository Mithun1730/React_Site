import React from 'react'
import LineItems from './LineItems';

const ItemsList = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
            {items.map((n)=>(
            <LineItems
            key={n.id}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
            n = {n}/>
        ))}
        </ul>
  )
}

export default ItemsList