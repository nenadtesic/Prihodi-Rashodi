import React, { useState } from 'react';
import Forma from './components/Forma';
import Stanje from './components/Stanje';
import Transakcije from './components/Transakcije';

const App = () => {
  const [prihodi, setPrihodi] = useState([])
  const [rashodi, setRashodi] = useState([])

  return (
    <div>
      <Stanje prihodi={prihodi} rashodi={rashodi} />
      <Forma setPrihodi={setPrihodi} setRashodi={setRashodi} />
      <Transakcije transakcije={prihodi} setTransakcije={setPrihodi} prihod />
      <Transakcije transakcije={rashodi} setTransakcije={setRashodi} prihodi={prihodi} />
    </div>
  );
};

export default App;