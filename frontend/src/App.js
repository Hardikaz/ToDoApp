import ToDo from "./components/ToDo"
import {useState,useEffect} from 'react'
import {getAllToDo} from "./utils/HandleApi"
function App() {

  const [toDo, setToDo]=useState([])
  
  useEffect(() => {
    getAllToDo(setToDo)
  },[])

  return (
    <div className="App">
     
     <div className="container">
      <h1>ToDo App</h1>
      <div className="top">
      <input type="text" placeholder="Add ToDo..."/>
      <div className="add">Add</div>
      </div>
      <div className="list">

      {toDo.map((item) => <ToDo key={item._id} text={item.text} />)}

      </div>
     </div>
    </div>
  );
}

export default App;
