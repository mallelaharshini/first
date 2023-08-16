import React, {Component} from 'react';
import './App.css';
import Great from './component/Great';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import Message from './component/Message';
import Porductlist from './component/Porductlist';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Great/>
       <Message />
        <Welcome name ="ABC"/>
        <Hello name ="Elima"/>
        <Hello name ="Clarke"/>
        <Hello name ="Fany" />
        <Porductlist productName='OnePlus Two' productPrice='200000'/>
      </div>
    );
  }
  
}

export default App;
