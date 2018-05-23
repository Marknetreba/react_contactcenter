import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Контактцентер</h1>
        </header>
          <div className="ui middle aligned center aligned grid">
              <div className="column">
                  <h2 className="ui teal image header">
                          <div className="content">
                              Log-in to your account
                          </div>
                  </h2>
                  <form className="ui large form">
                      <div className="ui stacked segment">
                          <div className="field">
                              <div className="ui left icon input">
                                  <i className="user icon"></i>
                                  <input type="text" name="email" placeholder="E-mail address"/>
                              </div>
                          </div>
                          <div className="field">
                              <div className="ui left icon input">
                                  <i className="lock icon"></i>
                                  <input type="password" name="password" placeholder="Password"/>
                              </div>
                          </div>
                          <div className="ui fluid large teal submit button">Login</div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
