import React from 'react';


import Board from './pages/board/Board';
import BoardDetail from './pages/board/BoardDetail';
import Link from './pages/Main';

import { Route , Routes } from 'react-router';

function App() {

  return (
    
    <Routes>
      <Route path='/' element={<Link /> } />

      <Route path='/board' element={<Board /> } />
      <Route path='/boardDetail' element={<BoardDetail /> } />


    </Routes>
  );
}

export default App;
