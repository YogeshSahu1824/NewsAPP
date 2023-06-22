import './App.css';
import React, { useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Navbar from'.src/components/Navbar'
// import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const App =()=> {
  // in the class based components we can create and define varibles 

  const c = 'Yogesh'
 const  pageSize=8
// const apikey=process.env.REACT_APP_NEWS_API
const [apikey, setapikey] = useState(process.env.REACT_APP_NEWS_API);
  
    return (
      <div>

        {/* this is my computer
                ........(c) */}
        <Router>
          <Navbar />
          {/* <News key="" pageSize={ apikey={apikey}pageSize} country="in" category="sports" /> */}

          <Routes>



            {/* <Route exact path="about" element={<News key="" pageSize={ apikey={apikey}pageSize} country="in" category="sports" />} /> */}



            <Route exact path="business" element={<News key="business" apikey={apikey} pageSize={pageSize} country="in" category="business" />} />
            <Route exact path="entertainment" element={<News key="entertainment" apikey={apikey} pageSize={pageSize} country="in" category="entertainment" />} />
            <Route exact path="general" element={<News key="general" apikey={apikey} pageSize={pageSize} country="in" category="general" />} />
            <Route exact path="health" element={<News key="health" apikey={apikey} pageSize={pageSize} country="in" category="health" />} />
            <Route exact path="science" element={<News key="science" apikey={apikey} pageSize={pageSize} country="in" category="science" />} />
            <Route exact path="sports" element={<News key="sports" apikey={apikey} pageSize={pageSize} country="in" category="sports" />} />
            <Route exact path="technology" element={<News key="technology" apikey={apikey} pageSize={pageSize} country="in" category="technology" />} />




          </Routes>
        </Router>
      </div>

    )
  }
export default App
