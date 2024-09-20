import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        } 
    }
  render() {
    return (
      <div>
         <form>
            <label htmlFor='id-name'>Your Name</label>
            <input id='name' value = {this.state.name} name='name' type='text'></input>
            <input type='submit' value='submit'></input>
        </form>
      </div>
    )
  }
}

export default ControlledForm