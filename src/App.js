import './App.css';
import Destacado from './components/Destacado';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const productos = ["boligrafos","cuadernos","resmas" ];

  const objetos ={};

  return (
    <div className='container-fluid'>
      <NavBar>
      <div>

      </div>
        </NavBar>

     <hr/>
     <Destacado> </Destacado>
     <ItemListContainer items={productos} titulo="lista de productos"/>
    

     <Footer/>
    </div>
  );
}

export default App;
