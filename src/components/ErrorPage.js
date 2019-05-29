import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <h3>Looks like something went wrong!</h3>
        <Link id='error-link' to='/'>
          Back to our site
        </Link>
      </div>
    );
  }
}

export default ErrorPage;
