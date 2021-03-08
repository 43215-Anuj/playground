
import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.inValid = this.isValid.bind(this);
  }
  isValid = (e) => {
    e.preventDefault();
    let input  = e.target.elements.password.value;
    let subStrings = input.split("-")
    let min = subStrings[0];
  
  let sub = subStrings[1];
  sub = sub.split(" ");
  
  let max = sub[0];
  let key = sub[1];
  key = key[0];
  let password = sub[2];
  let count = 0;
  
  for(let i=0 ; i<password.length ; i++ )
  {
    if(password[i] === key){
      count++;
    }
  }
    if(count >= min && count <= max) {
      alert("valid")
    }
    
    else{
      alert("invalid");
    } 
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.isValid} >
            <input id="password" name="password" type="text" placeholder="enter password" ref={(c) => this.password = c} required></input>
            <button>Login</button>
          </form>
        </header>
      </div>
    );
  }

}
