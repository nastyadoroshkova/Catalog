import React, { PureComponent } from 'react';

export default class PageNotFound extends PureComponent {
  render() {
    return (
      <div>
        Sorry, this page {this.props.location.pathname} not found ... :(
      </div>
    );
  }
}
