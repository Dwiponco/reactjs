import React from 'react';
import './App.scss';
import Header from './Compoents/inc/Header'
import Banner from './Compoents/page/Banner'
import Content from './Compoents/page/Content'
import Footer from './Compoents/inc/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
