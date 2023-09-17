import React from 'react';


import Board from './pages/board/Board';
import BoardDetail from './pages/board/BoardDetail';
import Link from './pages/Main';

import { Route , Routes } from 'react-router';
import BoardCookie from './pages/cookie/BoardCookie';
import DiaryCookie from './pages/cookie/DiaryCookie';
import DiaryDetail from './pages/diary/DiaryDetail';

function App() {

  return (
    
    <Routes>
      <Route path='/' element={<Link /> } />
      <Route path='board/cookie/:cookie' element = {<BoardCookie/>} />
      <Route path='diary/cookie/:cookie/:id' element = {<DiaryCookie/>} />
      <Route path='/board' element={<Board /> } />
      <Route path='/board/detail/:id' element={<BoardDetail /> } />


      <Route path='/diary/detail/:id' element={<DiaryDetail /> } />

    </Routes>
  );
}

export default App;
