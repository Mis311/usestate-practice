import React, { Component } from 'react'

class ClassCount extends Component {
 constructor(props) {
    super(props){
        this.state={
            count : 0
        }
    }
    }

    incrrementCount = () => {this.setState({count: this.state.count + 1})}
    render() {
    return (
      <>
        <button onClick={this.incrrementCount}>Count {this.state.count}</button>
      </>
    )
  }
}


export default ClassCount