import React from 'react';
import ReactDOM from 'react-dom';
import config from './config.js';
import Actions from './actions/Actions';
import {Grid, Row, Col} from "react-bootstrap";
import Dockbar from "./components/Dockbar.js";
import AuthStore from './stores/AuthStore';
import Reflux from 'reflux';
import GoogleLogin from 'react-google-login';

console.log(config);

const responseGoogle = (response) => {
  Actions.loggedIn(response);
}

export default class App extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = AuthStore;
  }
  render() {
 
    if(this.state.isSignedIn) {
      //console.log(AuthStore.getToken());
      return (
          <div>
                    <Dockbar />
                    <Grid>
                        <Row className="show-grid">
                            <Col xsHidden md={3}></Col>
                            <Col xs={12} md={6}>
                                {this.props.children}
                            </Col>
                            <Col xsHidden md={3}></Col>
                        </Row>
                    </Grid>
          </div>
      );
    } else {
        return (
          <div>
            Please sign in to use more functions.

            <GoogleLogin
              clientId={config.clientId}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              scope={"https://picasaweb.google.com/data"}
            />
          </div>
        );
    }  
  }
}
