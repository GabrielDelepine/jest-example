import React from 'react'
import { Component, Fragment } from 'react'
import PropTypes from 'prop-types';

export default class HelloWorld extends Component {
  static propTypes = {
    companyName: PropTypes.string,
  }

  render () {
    const { companyName } = this.props

    return (
      <Fragment>
        <h1>Hello World</h1>
        { companyName && <p>company: {companyName}</p> }
      </Fragment>
    )
  }
}
