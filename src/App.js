import React, {Component} from 'react';
import TriviaCard from './components/TriviaCard'
import './App.css';

class App extends Component {

  state = {
    trivia: [],
    isClicked: false
  }

  handleClick = (event) => {
    fetch('http://127.0.0.1:3000/trivia')
      .then(response => response.json())
      .then(data => this.setState( {trivia: data} ))
  }

  generateTriviaCards = () => this.state.trivia.map(trivium => <TriviaCard key={trivium.id} trivium={trivium} />)

  render() {
  return (
    <div className="App">
      <div id="button">
        <button onClick={this.handleClick}>Play Trivia!</button>
      </div>
      {this.generateTriviaCards()}
    </div>
  )}
}

export default App;
