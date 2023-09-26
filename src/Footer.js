import React from 'react'

const Footer = ({length}) => {
    
  return (
    <footer>
        {length} List {length === 1 ? 'item' : length === 0 ? 'item(s)':'items'}
    </footer>
  )
}

export default Footer