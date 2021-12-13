import List from './pages/List';
import SingleItem from './pages/SingleItem';
import Form from './pages/Form';
// Import Hooks from React
import {useState, useEffect} from "react"
// Import Router 6 Component (Route -> Route, Switch -> Routes)
import {Route, Routes, Link, useNavigate} from "react-router-dom"

/////////////////////////
// Style Object
/////////////////////////
const h1 = {
  textAlign: "center",
  margin: "10px"
}
const button = {
  backgroundColor: "purple",
  display: "block",
  margin: "auto"
}




function App() {


  const navigate = useNavigate()

  const url = "https://md-project-4.herokuapp.com/list/"

   // state to hold list 
   const [list, setPosts] = useState([])

   const nullList = {
     item: "",
     amount: ""
   }

   const [targetList, setTargetList] = useState(nullList)
///////////////////
// Functions
///////////////////

const getList = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setPosts(data);
};

 // function to add todos
 const addItem = async (newItem) => {
  await fetch (url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newItem)
  });

  //update the list of todos
  getList()
}

const getTargetList = (item) => {
  setTargetList(item)
  navigate("/edit")
}

const updateItem = async (item) => {
  await fetch(url + item.id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  //update our todos
  getList();
};

const deleteItem = async (item) => {
  await fetch(url + item.id, {
    method: "delete"
  })

  getList()
}


  // useEffects

   useEffect(() => {
     getList()
   }, [])

   //////////////////
   // Returned JSX
   //////////////////
  

   return (
    <div className="App">
      <h1 style={h1}>My Grocery List</h1>
      <Link to="/new"><button style={button}>Create New Item</button></Link>
      <Routes>
        <Route path="/" element={<List list={list}/>}/>
        <Route path="/post/:id" element={<SingleItem list={list} edit={getTargetList} deleteItem={deleteItem}/>}/>
        <Route path="/new" element={<Form 
        initialList={nullList}
        handleSubmit={addItem}
        buttonLabel="Add Item"
        />}/>
        <Route path="/edit" element={<Form
        initialTodo={targetList}
        handleSubmit={updateItem}
        buttonLabel="Update Item"
        />}/>
      </Routes>
    </div>
  );
}

export default App;
