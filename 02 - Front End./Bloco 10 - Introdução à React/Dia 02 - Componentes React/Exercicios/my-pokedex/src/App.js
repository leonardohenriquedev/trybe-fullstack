import './App.css';
import data from './data'
import Pokemon from './Pokemon';

function App() {
  return (
    <div className='pokedex'>
      {data.map((pokemon)=>
        <Pokemon data={pokemon}/>
      )}
    </div>
  );
}

export default App;
