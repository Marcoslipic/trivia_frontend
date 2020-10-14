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
      <button onClick={this.handleClick}>Play Trivia!</button>
      {this.showTrivia()}
    </div>
  )}
}

export default App;
