import { useState } from 'react';
import data from "./data";
import Tours from './component/Tours';

function App() {
  const [tours, setTours] = useState(data);

  function removeTours(id) {
    const newTours = tours.filter(tour => tour.id !== id); // Corrected "touur" to "tour"
    setTours(newTours);
  }
  if(tours.length ===0){
    return(<div className='refresh'>
      <h2>
        No tour left
      </h2>
      <button className='btn-white' onClick={()=>
        setTours(data)
      }>
        refresh
      </button>

    </div>)

  }

  return (
    <div className='app'>
      <Tours tours={tours} removeTour={removeTours} />
    </div>
  );
};

export default App;
