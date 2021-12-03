import './App.css';
import bg from "./bg.jpg";

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${bg})`, backgroundSize: '25%'}}>
        <div id='main'>
            <h1>Tu będzie zagadka z kodem</h1>
        </div>
    </div>
  );
}

export default App;
