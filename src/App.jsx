import { useEffect, useState } from 'react';
import data from './data/data';


function App() {

  const [listMovie, setListMovie] = useState([]);

  useEffect(()=>{
      const loadAll = async () =>{
      let list = await data.getMovies()
      setListMovie(list)
    }
    loadAll()
  },[]);

  return (
    <div className="App">
      <h1>React</h1>
      <ul>
       {listMovie.map((item, i)=> {
        return <li key={i}>{item.id}</li>
       })}
      </ul>      
    </div>
  );
}

export default App;
