import React from "react";

const FunctionalGreetingWithProps = (props) => {
    console.log(props)
    return <h1>Hello from {props.greeting}!</h1>
}

export default FunctionalGreetingWithProps;