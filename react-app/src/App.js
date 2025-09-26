import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/style.css';
import './css/responsive.css';


import Header from './components/Header';
import Banner from './components/Banner';
import Discover from './components/Discover';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Discover />
    </div>
  );
}

export default App;