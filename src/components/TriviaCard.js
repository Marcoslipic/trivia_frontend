import React, {Component} from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default class TriviaCard extends Component {
        
    state = {
        isClicked: false
    }

        render() {
        return (
        <div className="trivia-card">
            {/* <button  onClick={() => this.setState({ isClicked: !this.state.isClicked})} >Show Answer</button> */}
            <div>
                {this.state.isClicked
                    ?   <h2>{this.props.trivium.question}</h2>
                    :   null
                }
            </div>
            <CardFront trivium={this.props.trivium}/>
            <CardBack trivium={this.props.trivium}/>
        </div>
        )
    }
}