import React, { useState } from 'react';
import Forma from './components/Forma';
import Stanje from './components/Stanje';

const App = () => {
  const [prihodi, setPrihodi] = useState([])
  const [rashodi, setRashodi] = useState([])

  return (
    <div>
      <Stanje prihodi={prihodi} rashodi={rashodi} />
      <Forma setPrihodi={setPrihodi} setRashodi={setRashodi} />
    </div>
  );
};

export default App;