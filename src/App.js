import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar.jsx";
import Home from "./views/Home.jsx"
import Favoritos from "./views/Favoritos.jsx"
import MiContexto from "./context/MiContexto.jsx";
import NotFound from "./views/NotFound.jsx";
import "./index.css"

function App() {

  //Estados
  const [fotos, setFotos] = useState([]);
  const estadoGlobal = {fotos, setFotos};

  //UseEffect
  async function obtenerDatos() {
    const res = await fetch('/fotos.json');
    const data = await res.json();

    setFotos(data.photos);
  }
  useEffect(() => {
    //Callback
    obtenerDatos();
  }, []);

  return (
    <div className="App">
      <MiContexto.Provider value={estadoGlobal}>
        <BrowserRouter>
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={ <Home></Home>}></Route>
            <Route path="/favoritos" element={ <Favoritos></Favoritos>}></Route>
            <Route path="*" element={ <NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </MiContexto.Provider>
    </div>
  );
}

export default App;
