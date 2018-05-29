import React, {Component} from 'react';
import './styles/App.css';
import 'semantic-ui/dist/semantic.min.css';
import 'semantic-ui/dist/semantic.min'
import { Button, Tab, Form, Message, Input, Segment, Grid} from 'semantic-ui-react'


function click() {
  console.log("##########")
}

const panes = [
    { menuItem: 'О компании', render: () => <Tab.Pane>Описание компании</Tab.Pane> },
    { menuItem: 'О продукте', render: () => <Tab.Pane>Описание контактцентра</Tab.Pane> },
    { menuItem: 'Войти', render: () => <Tab.Pane>
         <Grid columns={2} centered>
            <Grid.Column>
                <Message
                    attached
                    header='Добро пожаловать!'
                    content='Заполните поля, чтобы зайти на сайт'
                    size={'large'}
                />
                <Form unstackable size={'large'} error={false}>
                    <Segment size={'large'}>
                        <Form.Field>
                            <div className="ui left icon input">
                                <Input type="text" name="email" icon={'user'} iconPosition={'left'} placeholder="E-mail адрес"/>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <div className="ui left icon input">
                                <Input type="password" name="password" icon={'lock'} iconPosition={'left'} placeholder="Пароль"/>
                            </div>
                        </Form.Field>
                        <Button fluid primary size={'large'} compact onClick={click}>Войти</Button>
                        <Message error header={'Ошибка'}/>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
        </Tab.Pane> },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <i className="huge phone volume icon"/>
          <h1 className="App-title">Контактцентр</h1>
        </header>
          <Tab menu={{stackable:true, widths:3, color: 'black', pointing: true, size: 'huge', borderless:true, secondary: true, attached:false, tabular:false}} panes={panes}/>
      </div>
    );
  }
}

export default App;
