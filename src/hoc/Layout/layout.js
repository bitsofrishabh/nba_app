import React, { Component } from 'react';
import './layout.css';
import Header from '../../componets/Header/header';

class Layout extends Component {

    render() {
        return (
            <div>
            <Header/>
              {this.props.children}
              Foote
            </div>
        )
    }
}

export default Layout;