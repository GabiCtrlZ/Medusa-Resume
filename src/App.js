import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Editor from './components/Editor/Editor'
import Us from './components/Us/Us'
import Jobs from './components/Jobs/Jobs';
import AnalyticsParallax from './components/Analytics/AnalyticsParallax';
import dummyData from './components/Business/dummyData.json'
import WhichBusiness from './components/Business/WhichBusiness';

@observer
class App extends Component {
  render() {
    console.log(dummyData)
    return (
      <Router>
        <Navbar title='Medusa Resume' />
        <Route exact path='/' render={() => <Landing />} />
        <Route exact path='/editor' render={() => <Editor />} />
        <Route exact path='/analytics' render={() => <AnalyticsParallax />} />
        <Route exact path='/jobs' render={() => <Jobs />} />
        <Route exact path='/business' render={() => <WhichBusiness />} />
        <Route exact path='/us' render={() => <Us />} />
      </Router>
    );
  }
}

export default App;
