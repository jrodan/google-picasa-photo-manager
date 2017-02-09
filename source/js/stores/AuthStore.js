import Reflux from 'reflux';
import Actions from '../actions/Actions';

import jquery from "jquery";
var $ = jquery;

export default class AuthStore extends Reflux.Store{
    
    constructor () {

        super();
        this.state = {};
        this.listenables = Actions;
        // pull cached token if one exists
        this.state.accessToken = localStorage.getItem('accessToken');
        this.state.isSignedIn = false;
        this.state.error = false;
        this.state.errorMessage = '';
        this.state.loading = false;
        this.state.user = null;

        console.log(this.state.accessToken);

        if(this.state.accessToken != "undefined" && this.state.accessToken !== null) {
            Actions.loginDone();
            this.state.isSignedIn = true;
            //console.log("isSignedIn");
        }

        console.log(this.state.isSignedIn);

    }

    getState () {
        return this.state;
    }

    getToken() {
        if (this.state.isSignedIn) {
            return this.state.accessToken;
        }
        return null;
    }

    changed () {
        this.trigger(this.getState());
    }

    loggedIn (authResponse) {
        
        if (authResponse) {
            console.log(authResponse);
            this.state.accessToken = authResponse.accessToken;
            this.state.googleId = authResponse.googleId;
            this.state.profileObj = authResponse.profileObj;
            this.state.tokenId = authResponse.tokenId;
            this.state.tokenObj = authResponse.tokenObj;
            this.state.isSignedIn = this.state.accessToken !== null ? true : false;
            localStorage.setItem('accessToken', this.state.accessToken);
            this.state.error = false;
            this.state.errorMessage = '';

        } else {
            this.state.error = true,
            this.state.errorMessage = 'Username or password invalid.'
        }

        this.state.loading = false;
        this.changed();
        //Actions.loginDone();

    }

    onLogout () {
        console.log("AuthStore: logout triggered");
        // clear it all
        this.state.accessToken = null;
        this.state.googleId = null;
        this.state.profileObj = null;
        this.state.tokenId = null;
        this.state.tokenObj = null;
        this.state.error = false;
        this.state.errorMessage = '';
        this.state.loading = false;
        this.state.isSignedIn = false;
        localStorage.removeItem('accessToken');
        this.changed();
    }

}