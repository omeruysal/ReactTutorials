import React from "react";
import "./styles.css";
import {useInput} from './useInputs';

export default function App() {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");


  const [inputs, setInputs] = useInput({name:"",age:"",email:""});

 
  return (
    <div className="App">
      <form>
        <label htmlFor="name">
        Name: <input name="name" value={inputs.name} onChange={setInputs} />
        </label>
        <label htmlFor="age">
        Age: <input name="age" value={inputs.age} onChange={setInputs} />
        </label>
        <label htmlFor="email">
        Email: <input name="email" value={inputs.email} onChange={setInputs} />
        </label>
      </form>
    </div>
  );
}
