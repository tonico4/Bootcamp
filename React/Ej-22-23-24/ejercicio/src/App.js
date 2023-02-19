import './App.css';
import TodosContainer from './components/container/todoContainer';
import TodoFormContainer from './components/container/todoFormContainer';
import FilterOptions from './components/pure/filterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodosContainer></TodosContainer>
        <TodoFormContainer></TodoFormContainer>
        <FilterOptions></FilterOptions>
      </header>
    </div>
  );
}

export default App;
