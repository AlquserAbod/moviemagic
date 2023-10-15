import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Add from './pages/Add/Add'
import Watched from './pages/Watched/Watched'
import Watchlist from './pages/Watchlist/Watchlist'

import  ContextProvider  from './Context/GlobelContext';
function App() {
  return (
    <BrowserRouter basename='/moviemagic'>

      <ContextProvider>
        <Header />
        <Routes>
          
          <Route exact  path='/' element={<Add />} />
          <Route path='/add' element={<Add/>} />
          <Route path='/watchlist' element={<Watchlist/>} />
          <Route path='/watched' element={<Watched/>} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>

  );
}

export default App;
