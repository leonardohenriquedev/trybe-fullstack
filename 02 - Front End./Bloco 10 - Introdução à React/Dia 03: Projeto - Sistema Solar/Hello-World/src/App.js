import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Estudar React', 'Tomar banho', 'Comer', 'Dormir']


function App() {
  return (
    <>
      {tasks.map((task)=>Task(task))}
    </>
  );
}

export default App;
