import Reflux from 'reflux';
import Actions from '../actions/Actions';

import jquery from "jquery";
var $ = jquery;

export class PicasaStore extends Reflux.Store{
    
    constructor () {

        super();
        this.state = {};
        this.listenables = Actions;
        // pull cached token if one exists
        this.state.albumList = [];
        this.state.photoList = [];

    }

    onLoginDone() {
        console.log('onLoginDone');
    }

}