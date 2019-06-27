import React, { Component } from 'react';
import './layout.css';

class Layout extends Component {

    render() {
        return (
            <div>
            Header
              {this.props.children}
              Foote
            </div>
        )
    }
}

export default Layout;