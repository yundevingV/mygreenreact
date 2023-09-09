import React from 'react';

import Board from './pages/board/Board';

import { Route , Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Board /> } />
      

    </Routes>
  );
}

export default App;
