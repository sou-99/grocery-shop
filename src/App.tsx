import React from 'react';
import logo from './logo.svg';
import './App.css';

import AllRoutes from './Router/Router';
import "./assests/css/style.css"
function App() {
  console.log("test--",window.innerWidth)
  return (
    <div className="App">
      {/* <Header/> */}
      <AllRoutes/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
