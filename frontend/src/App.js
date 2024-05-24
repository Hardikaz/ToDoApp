import ToDo from "./components/ToDo"
import {useState,useEffect} from 'react'
import {getAllToDo , addToDo} from "./utils/HandleApi"
function App() {

  const [toDo, setToDo]=useState([])
  const [text, setText]=useState("");
  const[isUpdating, setIsUpdating] =useState(false); 

  useEffect(() => {
    getAllToDo(setToDo)
  },[])

  return (
    <div className="App">
     
     <div className="container">
      <h1>ToDo App</h1>
      <div className="top">
      <input 
      type="text" 
      placeholder="Add ToDo..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      />

      <div className="add" onClick={isUpdating ? () => updateToDo() : () => addToDo(text, setText, setToDo)}>{isUpdating ?"Update":"Add"}</div>
      </div>
      <div className="list">

      {toDo.map((item) => <ToDo key={item._id} text={item.text} />)}

      </div>
     </div>
    </div>
  );
}

export default App;
