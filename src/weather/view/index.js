import React, { Component } from 'react'
import { connect } from 'react-redux'

const Default = (props) => {
  return (
    <div>
      <div onClick={props.handleClick}>Weather Component!</div>
      <div>name: {props.name}</div>
      <div>age: {props.age}</div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.weather.name,
    age: state.weather.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: function() { console.log('hello react')}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Default)