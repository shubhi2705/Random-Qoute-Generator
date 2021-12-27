import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useEffect,useState} from 'react';
function App() {
  const [advice,setAdvice]=useState('');
  const fetch_advice=()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
        setAdvice(response.data.slip.advice);
    })
    .catch(err=>{
      console.log("Error Occured")
    })
  }
  useEffect(()=>{
     fetch_advice();
  },[])
  return (
    <div className="app">
      <div className="card">
      <h1 className="App-header">
            {advice}
      </h1>
      <button className='button' onClick={fetch_advice}>
        <span>Give me Advice!!</span>
      </button>
      </div>
      
    </div>
  );
}

export default App;
