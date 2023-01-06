import React, { Component } from 'react'

 class Didupdate extends Component {
    constructor(){
        super();
        console.log("constructor")
        this.state = {count : 0}
    }

    componentDidMount(){
      console.log("mounting")
    }

    componentDidUpdate(){

      console.log("updating")
    }


    counting = () => {
      this.setState((prev,props)=>({count:prev.count+1}))
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        {console.log("rendering")}
        <button onClick={this.counting}>Add</button>
      </div>
    )
  }
}
export default Didupdate ;