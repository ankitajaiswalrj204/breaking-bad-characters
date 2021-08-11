import React,{useState,useEffect}  from 'react';
import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import Axios from "axios";




function App() {
  
  const [search,setSearch]=useState("");
  const [data,setcharacter]=useState([]);
  
  useEffect(()=>{ getCharacter();},[]);
  const onInputChange=(e)=>{
    console.log(e.target.value);
      setSearch(e.target.value);

  }
  
  const getCharacter=async()=>{
  const result=await Axios.get(`https://www.breakingbadapi.com/api/characters?name=${search}`);
  console.log(result);
  setcharacter(result.data)
  }
  const onSearchClick=()=>{
     getCharacter();
  }

  return (
    <> 

      <div className="App">
        <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick} />
        <div className="container">
          <Characters data={data}/>
        </div>
      </div>
    </>
  );
}

export default App;
