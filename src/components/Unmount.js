import React, { Component } from 'react' 
import Cards from './Cards'

export default class Unmount extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
        }; 
        console.log("constructor");
    }
    
    deleting = () => {
        this.setState({ show : false })
    }
     
    render() {
        return (
            <div> {this.state.show ? <Cards/> : ""}
                <button onClick={this.deleting}>click</button>
            </div>
        )
    }
}





