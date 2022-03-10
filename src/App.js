import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import BoardListPage from 'pages/BoardListPage';
import BoardDetailPage from 'pages/BoardDetailPage';
import BoardWritePage from 'pages/BoardWritePage';
import RegistPage from 'pages/RegistPage';
import NotFoundPage from 'pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/write/:type" element={<BoardWritePage />} />
        <Route path="/board/:id" element={<BoardDetailPage />} />
        <Route path="/board" element={<BoardListPage />} />
        <Route path="/regeist" element={<RegistPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
