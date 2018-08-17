import React, {Component} from 'react';
import Player from './ChoosePlayer';

class Status extends Component {
	render() {
		return (
			this.props.player ? <h2>Next Player is: {this.props.player} </h2>: <Player player={(e) => this.setPlayer(e)} />
		);
	}
}

export default Status;