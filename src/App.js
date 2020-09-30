import React from 'react';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Body from './Components/Body';
import 'font-awesome/css/font-awesome.min.css';
import NavBrand from './Components/NavBrand';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Body/>
      <NavBrand/>
      <Footer/>
    </div>
  );
}

export default App;
