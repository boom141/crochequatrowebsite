import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/style_config.css';

import Navbar from "./component/Navbar";
import Landing from "./pages/Landing";


function App() {
  return (
    <>
        <Navbar/>
        <Landing />
    </>
  );
}

export default App;
