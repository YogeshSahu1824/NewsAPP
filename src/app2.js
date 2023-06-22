// this code is written by code with haryy for the my logic news.js is wrote that logic and successfully implemented it 
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
// import Navbar from'.src/components/Navbar'
// import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  // in the class based components we can create and define varibles 

  c = 'Yogesh'
  pageSize=8
  state={
    progress:30
  }
  setProgres=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>

        {/* this is my computer
                ........(this.c) */}
        <Router>
        <LoadingBar
        height={2}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      {/* {this.progress:50} */}
          <Navbar />
          {/* <News setProgres={this.setProgres} key="" pageSize={this.pageSize} country="in" category="sports" /> */}

          <Routes>



            {/* <Route exact path="about" element={<News setProgres={this.setProgres} key="" pageSize={this.pageSize} country="in" category="sports" />} /> */}



            <Route exact path="business" element={<News setProgres={this.setProgres} key="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="entertainment" element={<News setProgres={this.setProgres} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="general" element={<News setProgres={this.setProgres} key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="health" element={<News setProgres={this.setProgres} key="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="science" element={<News setProgres={this.setProgres} key="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="sports" element={<News setProgres={this.setProgres} key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="technology" element={<News setProgres={this.setProgres} key="technology" pageSize={this.pageSize} country="in" category="technology" />} />




          </Routes>
        </Router>
      </div>

    )
  }
}
