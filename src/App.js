import logo from './logo.svg';
import './App.css';

const name={name:'Masud Rana',age:22,colore:'Greeen'}
const nameStyle={
  color:'green',
  backgroundColor:'black'
}

function App() {
  return (
    <div className="App">
      <h1>React Core Concepts</h1>
      <hr></hr>
      <h3 style={nameStyle}>{name.name}</h3>
      <h3>{name.age}</h3>
      <h3 style={{color:'red'}}>{name.colore}</h3>
    </div>
  );
}

export default App;
