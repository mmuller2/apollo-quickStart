import ExchangeRates from './index'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <a
          className="App-link"
          href="https://www.apollographql.com/docs/react/get-started/"
          target="_blank"
          rel="noopener noreferrer"
        >
          This was created from
        </a>
        <div>
          <h2>My first Apollo app!!!</h2>
          <hr></hr>
          <h3>Exchange rates</h3>
          <ExchangeRates/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
