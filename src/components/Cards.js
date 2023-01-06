import React, { Component } from 'react'

export default class Cards extends Component {

  componentWillUnmount(){

    console.log("Unmount")
  }
  render() {
    return (
      <div>
        <h1>This is Card</h1>
      </div>
    )
  }
}
