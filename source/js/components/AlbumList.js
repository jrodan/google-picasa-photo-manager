import React from 'react';
import Reflux from 'reflux';
import Picasa from 'picasa-advanced';
import Album from './Album';
import AuthStore from '../stores/AuthStore';

export default class AlbumList extends Reflux.Component {

	constructor(props) {
	    super(props);
	    this.state = {};
	    this.store = AuthStore;
	}

    // componentDidMount() {
    //  	this.loadAlbums();
    // }

    //React.createClass

    setState(state) {
    	this.loadAlbums(state);
    }

	loadAlbums(state) {

		console.log(state);
		console.log("isSignedIn: "+ state.isSignedIn + " "+state.accessToken);

		if(state.isSignedIn) {

			var accessToken = state.accessToken;
			var picasa = new Picasa();
			var albumList = [];
			var errorLocal = "";

			var options = { maxResults: 2};
			
			picasa.getAlbums(accessToken, options, (error, albums) => {
    			
    			if(albums) {
    				albums.forEach(function(album) {
    					console.log(album);
    					albumList.push(<Album album={album} key={album.id} />);
    				});

    				//this.setState();
    				super.setState({albumList: albumList});
    				super.setState(state);
					//this.state.albumList = albumList;
					//this.forceUpdate();

	    		} else {
	    			errorLocal = error;
	    		}
    		})
    		
		}
		
	}

	render () {
			
		console.log("isSignedIn: "+this.state.isSignedIn);

		var albumList = this.state.albumList; //this.loadAlbums();
		//this.loadAlbums();
		var errorLocal = "";
		
		return (
			<div>
				<h2>OverviewList</h2>
				
				{errorLocal}
				{this.state.isSignedIn}

				<ul>
					{albumList}
				</ul>
				

			</div>
		)
	}

}