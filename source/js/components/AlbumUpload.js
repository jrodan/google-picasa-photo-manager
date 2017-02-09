import React from 'react';
import Reflux from 'reflux';
import Picasa from 'picasa-advanced';
import Album from './Album';
import AuthStore from '../stores/AuthStore';

export default class AlbumUpload extends Reflux.Component {

	constructor(props) {
	    super(props);
	    this.state = {};
	    this.store = AuthStore;
	    //this.state.albumList = this.loadAlbums();
	    //this.stores = [StatusStore, AnotherStore];
	}

	render () {
			
		return (
			<div>
				<h2>Upload Album</h2>
					
				{this.state.isSignedIn}

			</div>
		)
	}

}