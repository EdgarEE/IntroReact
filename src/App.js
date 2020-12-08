import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

//importar mi componete

import MiComponent from "./components/MiComponente"

function Holamundo(nombre, edad) {
  let presentacion = (
    <div>
      <h2>Hola soy {nombre}</h2>
      <h3>Tengo {edad} años</h3>
    </div>
  );

  return presentacion;
}

function App() {
  let nombre = "Edgar Escalona";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola bienvenido Edgar Escalona al curso de React JSX</p>
        {Holamundo(nombre, 26)}
        
        <section className="componentes">
          <MiComponent/>
          

        </section>
      </header>
    </div>
  );
}

export default App;
