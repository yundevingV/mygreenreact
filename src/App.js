import React from 'react';


import Board from './pages/board/Board';
import BoardDetail from './pages/board/BoardDetail';
import Link from './pages/Main';

import { Route , Routes } from 'react-router';
import Cookie from './pages/Cookie';

function App() {

  return (
    
    <Routes>
      <Route path='/' element={<Link /> } />
      <Route path='cookie/:cookie' element = {<Cookie/>} />
      <Route path='/board' element={<Board /> } />
      <Route path='/boardDetail' element={<BoardDetail /> } />


    </Routes>
  );
}

export default App;
