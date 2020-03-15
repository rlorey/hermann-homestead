import React, { Component } from 'react';
import './Page.css';

class Page extends Component {
  render() {
    return (
        <div id='Page'>
            <div id='page-header'>
                <a id='site-name' href='/'>Hermann Homestead</a>
            </div>
            <div id='page-title'>{this.props.title}</div>
            <div id='page-text'>{this.props.children}</div>
        </div>
    );
  }
}

export default Page;
