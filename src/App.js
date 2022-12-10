import {lazy, Suspense} from 'react';
import './App.css';
import Spinner from './components/spinner/Spinner';
import {Routes, Route} from 'react-router-dom'

const HomePage = lazy(() => import('./routes/home/HomePage'))
const CountryPage = lazy(() => import('./routes/country/CountryPage'))

function App() {

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path=':country' element={<CountryPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
