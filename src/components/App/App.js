import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import './App.scss';


function App() {

  return(
    <section className='App'>
       <Header />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>

       <Footer />

    </section>
 )
}
export default App;