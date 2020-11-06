import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Title from "./components/Title";
import Container from "./components/Container";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [ data, setData ] = useState([]);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people`)
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err))
  }, []);

  console.log(data);


  return (
    <div className="App">
      <Title></Title>
      <Container data={data}></Container>
    </div>
  );
}

export default App;
