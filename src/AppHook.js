import React, {useState} from 'react';
import './App.css';
import Form from './Form'

const  AppHook = (props) => {
    const InputNameHandler = (event) => {

        return useStateInputName( event.target.value )

    }
    const InputAgeHandler = event => {
        return useStateInputAge(event.target.value)
    }
    const AddPerson = (event)=>{
        event.preventDefault();
        useStatePerson((state)=>[...state, {name:stateInputName, age:stateInputAge}])
    }

const [statePerson, useStatePerson] = useState(
     [
        { name: 'Nino', age: '20' },
        { name: 'Ahmad', age: '40' },
        { name: 'Fajrul', age: '5' }
      ]
)
const [stateInputName, useStateInputName] = useState('')
const [stateInputAge, useStateInputAge] = useState('')

    return(
        
        <div>
            <h1>Title</h1>
           {
                statePerson.map(each=>{
              return <li key={each.name} >Im {each.name}, im {each.age} years old</li>

           })}
        <Form inputName={InputNameHandler} inputAge= {InputAgeHandler} addPerson={AddPerson}></Form> 
        </div>
    )


}



export default AppHook;
