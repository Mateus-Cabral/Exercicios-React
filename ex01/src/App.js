import './App.css';
import Carros from './components/Carros';
import Cabecalho from './components/Cabecalho';
import Parceiros from './components/Parceiros';


function App() {

  const somar = () => {
    console.log(5*5)
  }

  return (
    <>
      <Cabecalho />
      <Carros carro1='F50' carro2='Aventador' carro3='Ford GT' carro4='Pagani' carro5='Corvete Stingray' />
      <Parceiros funcao={somar} />
    </>
  );
}

export default App;
