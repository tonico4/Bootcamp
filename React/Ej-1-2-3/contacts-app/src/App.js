import logo from './logo.svg';
import './App.css';
import ContactContainer from './components/container/contact_container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactContainer></ContactContainer>
      </header>
    </div>
  );
}

export default App;
