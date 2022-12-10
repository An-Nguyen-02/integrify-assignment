import * as React from 'react';
import './App.css';
import HomePage from './routes/home/HomePage';
import {Routes, Route} from 'react-router-dom'
import CountryPage from './routes/country/CountryPage';
function App() {

  return (
    <Routes>
      <Route path='/' index element={<HomePage />} />
      <Route path=':country' element={<CountryPage />} />
    </Routes>
  );
}

export default App;
