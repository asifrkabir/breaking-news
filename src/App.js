import React from 'react';
import './App.css';
// import { Button, Card } from 'react-bootstrap';
// import News from './Components/News';
import Header from './Components/Header/Header';
import TopHeadline from './Components/TopHeadline/TopHeadline';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <Header></Header>
      <TopHeadline></TopHeadline>

    </div>
  );
}

export default App;