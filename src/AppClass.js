import React, {useState} from 'react';
import './App.css';



class AppClass extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      person: [
        { name: 'Nino', age: '20' },
        { name: 'Ahmad', age: '40' },
        { name: 'Fajrul', age: '5' }
      ],
      inputName:'',
      inputAge:''
    }
    this.onChangeAge = this.onChangeAge.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
    this.submit = this.submit.bind(this)
  }
  

  onChangeName(event){
    this.setState({
      inputName: event.target.value
    })
  }
  onChangeAge(event){
    this.setState({
      inputAge: event.target.value
    })
  }

  submit(event){
    event.preventDefault()
    this.setState(state=>({
      person: [...state.person, {name:this.state.inputName, age:this.state.inputAge}]
    }))
  }

render(){
    return(
        <div>
            <h1>Title</h1>
           {
             this.state.person.map(each=>{
              return <li key={each.name} >Im {each.name}, im {each.age} years old</li>
           })} 
           <form action="">
           <input onChange={this.onChangeName} type="text" placeholder='name' />
           <input onChange={this.onChangeAge} type="text" name="" id="" placeholder='age' /> 
           <button onClick={this.submit} >Enter</button>
           </form>
        </div>
    )
}
}



export default AppClass;
