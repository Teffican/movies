import React from 'react';
import Header from './components/header';
import Home from './pages/home';

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Header />
        <Home />
      </div>
    )
  }
}

export default App;
