
import React, { useEffect } from "react"
import Navigation from "./components/Navigation";
import Dead from "./components/Dead";
import Form from "./components/Form";
import List from "./components/List";
import Space from "./components/Space";
import Tasks from "./components/Tasks";
import Wishlist from "./components/Wishlist";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export default function App() {
  const [plants, setPlants] = React.useState([])


  useEffect(
    () => {fetch('http://127.0.0.1:8000/getlist/')
    .then (response => response.json())
    .then (response => setPlants(response))
  }, 
    []
  );

  return (
    <Router>
    <div class="container-fluid gx-0">
    <div class="row">
    <div class="col-3">
    <Navigation />
    </div>
    <div class="col-8">
    <Routes>
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/list" element={<List 
      plants={plants}/>} />
      <Route path="/wishlist" element={<Wishlist 
      plants={plants}/>} />
      <Route path="/dead" element={<Dead />} />
      <Route path="/form" element={<Form />} />
      <Route path="/space" element={<Space />} />
    </Routes>
    </div>
    </div>
    </div>
  </Router>
  ) 
}
