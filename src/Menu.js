import React, {Component} from 'react';
import 'semantic-ui/dist/semantic.min.css';
import 'semantic-ui/dist/semantic.min'

class Menu extends Component{
    render() {
        return (
            <div className="Menu">
                <div className="ui vertical menu">
                    <a className="teal item active">
                        Входящие
                        <div className="ui teal left pointing label">1</div>
                    </a>
                    <a className="item">
                        Спам
                        <div className="ui label"/>
                    </a>
                    <a className="item">
                        Администратор
                        <div className="ui label"/>
                    </a>
                </div>
            </div>
        )
    }

}

export default Menu