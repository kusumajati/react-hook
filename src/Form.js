import React from 'react'

const Form3 = (props) => {
    return (
        <div>
<form action="">
           <input onChange={props.inputName} type="text" placeholder='name' />
           <input onChange={props.inputAge} type="text" name="" id="" placeholder='age' /> 
           <button onClick={props.addPerson}  >Enter</button>
           </form>
        </div>
    )
}

export default Form3