import React, { Component } from 'react'

class Mounting extends Component {
    constructor(){
        super();
        this.state={
            num:0,
        };
        console.log("constructor");
    }

    componentDidMount(){
        console.log("Mounting");
    }

    counting=()=>{
        this.setState((prev,props)=>({num:prev.num+1}))
    }
    countings=()=>{
        this.setState((prev,props)=>({num:prev.num-1}))
    }
  render() {
    return (
      <div>
        {console.log("rendering")}
        <h1>{this.state.num}</h1>
        <button onClick={this.counting}>increment</button>
        <button onClick={this.countings}>decrement</button>
      </div>
    )
  }
}
export default Mounting

