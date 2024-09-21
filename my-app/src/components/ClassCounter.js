import React, { Component } from React


export class ClassCounter extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0,
        }
    }

    componentDidMount(){
        document.title = this.state.count;
    }
    componentDidUpdate(){
        document.title = this.state.count;
    }
    render(){
        return(
            <div>
                <button onClick={() => setState(
                    prevState => ({
                        count: prevState + 1
                    })
                )}>Increment Count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter