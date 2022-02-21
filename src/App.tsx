import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Details from './pages/details';
import Home from './pages/home';

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Header />
        <Routes>
          <Route path='*' element={<Home />}/>
          <Route path='/details/id:id' element={<Details />}/>
        </Routes>
      </div>
    )
  }
}

export default App;
