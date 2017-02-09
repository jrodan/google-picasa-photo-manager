import React from "react";
import {Link} from "react-router";
import Reflux from "reflux";
import Actions from "../actions/Actions.js";
import AuthStore from '../stores/AuthStore';

export default class Dockbar extends Reflux.Component {   
    
    constructor(props) {
        super(props);
        this.state = {};
        this.store = AuthStore;
    }

    handleLogout(event) {
        Actions.logout();
    }

    render() {
        return (
            <nav className="navbar navbar-default dockbar">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link activeClassName="active" to="/">Home</Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="list-albums">List Albums</Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="add-albums">Upload Albums</Link>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <p className="username navbar-text">Username</p>
                            </li>
                            <li>
                                <a href="#" onClick={ this.handleLogout.bind(null,this) } className="login">logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}