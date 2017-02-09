import React from 'react';
import Reflux from 'reflux';

export default class Album extends Reflux.Component {

	render () {

		return (
			<li>
				{this.props.album.title}
			</li>
		)
	}

}