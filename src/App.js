import React from 'react';

import './App.css';
import Gallery from './InfinitScrolling/Gallery';

function App() {
  return (
    <div className="App">
      <h1>Infinite Scroll Gallery with Lazy Loading</h1>
      <Gallery/>
    </div>
  );
}

export default App;
