import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <Student></Student>
      <Student></Student>
      <h3>Name:Masud Rana</h3>
      <Student></Student>
    </div>
  );
}
function Student(){
  return(
    <div className='student'>
      <h3>Name:Ajis Ali</h3>
      <p>Roll:4455</p>
    </div>
  )
}

export default App;
