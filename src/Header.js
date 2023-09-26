import React from 'react'

const Header = (props) => {
  return (
    <div>
        <h1 style={{textAlign:"center"}}>{props.title}</h1>
    </div>
  )
}
Header.defaultProps = {
  title:"To do list"
}
export default Header