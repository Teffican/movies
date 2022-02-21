import React from 'react';
import AnimatedSwitch from './components/animated-switch';
import Header from './components/header';

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Header />
        <AnimatedSwitch />
      </div>
    )
  }
}

export default App;
