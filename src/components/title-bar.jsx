import React from 'react'
import PropTypes from 'prop-types'
import Debug from 'debug'
import { RIEInput } from 'riek'

import Loop from '../loop'
import * as Model from '../model'
import HashForm from './hash-form'

const log = Debug('pushpin:title-bar')

class TitleBar extends React.PureComponent {
  constructor(props) {
    super(props)
    log('constructor')

    this.onChange = this.onChangeTitle.bind(this)
    this.onSubmit = this.onChangeBoardBackgroundColor.bind(this)
  }

  onChangeTitle(newState) {
    log('onChangeTitle')
    Loop.dispatch(Model.setTitle, newState)
  }

  onChangeBoardBackgroundColor(newState) {
    log('onChangeBoardBackgroundColor')
    Loop.dispatch(Model.setBoardBackgroundColor, newState)
  }

  onSubmit(e) {
    log('onSubmit')
    e.preventDefault()
  }

  render() {
    log('render')

    return (
      <div className="TitleBar">
        <img className="TitleBar__logo" alt="pushpin logo" src="pushpinIcon_Standalone.svg" width="28" height="28" />
        <RIEInput
          value={this.props.title}
          change={this.onChangeTitle}
          propName="title"
          className="TitleBar__titleText"
          classLoading="TitleBar__titleText--loading"
          classInvalid="TitleBar__titleText--invalid"
        />
        
        <i className="la la-chevron-circle-down"></i>

        <RIEInput
          value={this.props.boardBackgroundColor}
          change={this.onChangeBoardBackgroundColor}
          propName="boardBackgroundColor"
          classLoading="loading"
          classInvalid="invalid"
        />
        

        <HashForm
          formDocId={this.props.formDocId}
          activeDocId={this.props.activeDocId}
          requestedDocId={this.props.requestedDocId}
        />
      </div>
    )
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  boardBackgroundColor: PropTypes.string.isRequired
}

export default TitleBar