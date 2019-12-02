import React, { useState } from 'react';
import Dropzone from './dropzone';

import './App.css';

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <section>
        {items.map((item) => <article key={item}>{item}</article>)}
      </section>
      <Dropzone onDrop={(newItem) => setItems([...items, newItem])} />
    </div>
  );
}

export default App;
