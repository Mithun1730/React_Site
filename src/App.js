import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import React, { useState, useEffect } from 'react'
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";


function App() {
  const API_URL = 'http://localhost:3500/items'
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null)
  const [isLoading,setisLoading] = useState(true)
 


  const handleCheck = async(id) => {
    const listItems = items.map((items) => items.id === id ? { ...items, checked: !items.checked } : items)
    setItems(listItems)

    const myItem = listItems.filter(item => item.id === id)

    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({checked:myItem[0].checked})
    }

    const requestedURL = `${API_URL}/${id}`

    const result = await apiRequest(requestedURL, updateOptions)
    if(result) setFetchError(result)


    // localStorage.setItem("todo_list",JSON.stringify(listItems))
  }

  const handleDelete = async(id) => {
    const listItems = items.filter((items) => items.id !== id)
    setItems(listItems)

    const deleteOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify()
    }

    const requestedURL = `${API_URL}/${id}`

    const result = await apiRequest(requestedURL, deleteOptions)
    if(result) setFetchError(result)

    // localStorage.setItem("todo_list",JSON.stringify(listItems))
  }


  const addItem = async(item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems)

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(addNewItem)
    }

    const result = await apiRequest(API_URL, postOptions)
    if(result) setFetchError(result)
    // localStorage.setItem("todo_list",JSON.stringify(listItems)) 
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem("")


  }


  useEffect(() => {
    // JSON.parse(localStorage.getItem('todo_list'))
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw Error("Data not recieved..")
        console.log(response)
        const listItems = await response.json();
        console.log(listItems)
        setItems(listItems)
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message)
      }finally{
        setisLoading(false)
      }
    }
    setTimeout( ()=>{
    (async() => await fetchItems())()
  },2000) 
  }, [])

  return (
    <div className="App">
      <Header title='Course List' />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <AddItem
        handleSubmit={handleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <main>
        {isLoading && <p style={{textAlign:'center'}}>Loading Items...</p> }
        {fetchError && <p style={{textAlign:'center'}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading &&<Content
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        />}
      </main>
      < Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
