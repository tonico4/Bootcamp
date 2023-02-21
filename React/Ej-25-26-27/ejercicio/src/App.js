import './App.css';
import TaskContainer from './components/container/taskContainer';
import { TaskProvider } from './hooks/context/taskContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskProvider>
          <TaskContainer></TaskContainer>
        </TaskProvider>
      </header>
    </div>
  );
}

export default App;
