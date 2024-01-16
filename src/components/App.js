
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  let [message, setMessage] = useState("");

  function handleChange(e){
    setMessage(e.target.value);
  }
  return (
    <div>
        <input type="text"
        onChange={handleChange}></input>

        {message != "" ? <p>Hello {message}!</p> : <p></p>}
    </div>
  )
}

export default App
