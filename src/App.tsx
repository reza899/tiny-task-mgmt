import React from 'react';
import TinyTaskProvider from './Context/store';

function App() {
  return (
    <TinyTaskProvider>
      Tiny Task Management
    </TinyTaskProvider>
  );
}

export default App;
