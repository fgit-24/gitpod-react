import React from 'react'

function EventsFunctional(){
    function Button() {
        console.log('Button pushed!')
    }

    return (
        <button onClick={ Button } >Click me -- functional component!</button>
    )
}

export default EventsFunctional