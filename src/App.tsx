import React from 'react';
import './App.scss';

import { Calculator } from './components/Calculator/index';
import { ShowStream } from './components/ShowStream';

function App() {
  return (
    <div>
      <main className="container">
        <ShowStream />
        <Calculator />
      </main>
    </div>
  );
}

export default App;
