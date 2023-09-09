import React from 'react';


import Board from './pages/board/Board';
import BoardDetail from './pages/board/BoardDetail';

import { Route , Routes } from 'react-router';

function App() {
  return (
    <Routes>

      <Route path='/board' element={<Board /> } />
      <Route path='/boardDetail' element={<BoardDetail /> } />


    </Routes>
  );
}

export default App;
