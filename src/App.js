import React from "react";
import './App.css';
import Destacado from './components/Destacado';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {

  return (
    <div className='container-fluid'>
      <NavBar>
      <div>

      </div>
        </NavBar>
     <hr/>
     <ItemListContainer/>
     <ItemCount stock={5} initial={1} onAdd={0}/>
     <Destacado> </Destacado>
     
    

     <Footer/>
    </div>
  );
}

export default App;
