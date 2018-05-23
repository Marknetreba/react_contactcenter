import React, {Component} from 'react';
import './styles/App.css';
import 'semantic-ui/dist/semantic.min.css';
import 'semantic-ui/dist/semantic.min'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <i className="huge phone volume icon"></i>
          <h1 className="App-title">Контактцентр</h1>
            <div className="ui large three item menu black">
                <div className="item active">
                    О компании
                </div>
                <a className="item">
                    О продукте
                </a>
                <div className="item">
                    Вход
                </div>
            </div>
        </header>
          <div className="ui middle aligned center aligned grid">
              <div className="column">
                  <h2 className="ui black image header">
                          <div className="content">
                              Войти в личный кабинет
                          </div>
                  </h2>
                  <form className="ui large form">
                      <div className="ui stacked segment">
                          <div className="field">
                              <div className="ui left icon input">
                                  <i className="user icon"></i>
                                  <input type="text" name="email" placeholder="E-mail адрес"/>
                              </div>
                          </div>
                          <div className="field">
                              <div className="ui left icon input">
                                  <i className="lock icon"></i>
                                  <input type="password" name="password" placeholder="Пароль"/>
                              </div>
                          </div>

                          <button className="ui fluid large black submit button">Войти</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
