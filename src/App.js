import React, {Component} from 'react';
import Card from './components/Card'
import './App.css';

class App extends Component {

  state = {
    trivia: []
  }

  handleClick = (event) => {
    fetch('http://127.0.0.1:3000/trivia')
      .then(response => response.json())
      .then(data => this.setState( {trivia: data} ))
  }

  showTrivia = () => this.state.trivia.map(trivium => <Card key={trivium.id} trivium={trivium} />)

  render() {
  return (
    <div className="App">
      <button id="btn" onClick={this.handleClick}>Fetch Trivia Questions</button>
      {this.showTrivia()}
    </div>
  )}
}

export default App;
