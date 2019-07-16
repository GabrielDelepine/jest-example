import React from 'react'
import { Component, Fragment } from 'react'
import PropTypes from 'prop-types';

export default class HelloWorld extends Component {
  static propTypes = {
    companyName: PropTypes.string,
  }

  state = {
    buttonClicked: false,
  }

  clickButton = () => {
    this.setState({
      buttonClicked: true,
    })
  }

  render () {
    const { companyName } = this.props
    const { buttonClicked } = this.state

    return (
      <Fragment>
        <h1>Hello World</h1>
        { companyName && <p>company: {companyName}</p> }
        <button onClick={this.clickButton}>
          {buttonClicked ? 'you clicked me' : 'you never clicked me'}
        </button>
      </Fragment>
    )
  }
}
