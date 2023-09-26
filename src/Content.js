import ItemsList from "./ItemsList";
const Content = ({items, handleCheck, handleDelete}) => { 
    
  return (
    <>
        {items.length?(
        <ItemsList
        handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      items = {items}
        />
        ):(
        <p style={{color:'red', textAlign:'center'}}>Your list is empty</p>
        )}
    </>
  )
}

export default Content