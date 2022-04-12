import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Name from './components/name';
import Age from './components/age';
import SubmitResults from './components/submitResults';

function App() {
  const [formSubmitted, formSubmittedValue] = useState(false)
  const [nameValue, setNameValue] = useState("")
  const [ageValue, setAgeValue] = useState(0)
  const nameRef = useRef("")
  const ageRef = useRef(0)

  useEffect(()=>{
    nameRef.current = nameValue;
    ageRef.current = ageValue;
    formSubmittedValue(false);
  },[formSubmitted]);

  return (
    <div className="App">
      <form className="w-full max-w-lg m-auto py-10 mt-10 px-10 border">
        <Name name={nameValue} setName={setNameValue}/>
        <br/>
        <Age age={ageValue} setAge={setAgeValue}/>
      </form>
      <button className="mt-4 bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded" type="submit" onClick={() => formSubmittedValue(true)}>Submit</button>
      <SubmitResults name={nameRef.current} age={ageRef.current}/>
    </div>
  );
}

export default App;
