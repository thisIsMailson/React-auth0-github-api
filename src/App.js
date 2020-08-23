import React, { Component } from "react";
import "./App.css";
import GitHub from "./Components/GitHub";
import Header from "./Components/Header";
import Auth0Lock from "auth0-lock";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idToken: "",
      profile: {},
    };
  }

  static defaultProps = {
    clientID: "5tzinChrctYv40Ahte0CXxjwWKjk5DhP",
    domain: "dev-r4ke-xms.auth0.com",
  };

  componentDidMount() {
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain, {
      auth: {
        redirectUrl: "http://localhost:3000",
        responseType: "code",
        params: {
          scope: "openid email", // Learn about scopes: https://auth0.com/docs/scopes
        },
      },
    });
    this.lock.on("authenticated", (authResult) => {
      console.log("sasd" + authResult);
      // this.lock.getProfile(authResult.idToken, (err, profile) =>{
      //   if(err) {
      //     console.log(err);
      //     return
      //   }
      //   console.log(profile);

      // })
    });
  }

  showLock() {
    this.lock.show();
  }

  render() {
    return (
      <div className="App">
        <Header onLogin={this.showLock.bind(this)} />
        <GitHub />
      </div>
    );
  }
}

export default App;
