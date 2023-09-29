import './App.css';
import React, { Component } from 'react';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {apiResponse: ""};
    }


    callAPI(){
    return fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res}))
        .catch(error=>error)
    }


  componentDidMount() {
    this.callAPI();
  };

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>{this.state.apiResponse}</p>
      </header>
    </div>
  );
  }
}



export default App;
