import logo from './logo.svg';
import './App.css';
import Message from './hw_1';
import CommentsList from './hw_2';
import TemperatureConverter from './hw_3_1';
import TodoList from './hw_3_2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text="Это я"/>
        <CommentsList />
        <TemperatureConverter />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
