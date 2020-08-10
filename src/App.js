import React, {Component} from 'react';

export default class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       email: '',
       password: ''
     }
   }
   handleChange = ({ target: { value, id}}) => {
    var lol = false
     if(localStorage.getItem(id)!==null){
        var c = []
        c.push(value)
        localStorage.setItem(id, JSON.stringify(c))
     }else{
      localStorage.setItem(id, JSON.stringify(value))
     }

   }

  render() {
    return (
      <div>
        <div className="login_block">
            <input type="text" id="email" placeholder="email" onChange={this.handleChange} />
            <input type="password" id="password" placeholder="password" onChange={this.handleChange}/>
            <input type="submit"/>
        </div>
      </div>
    )
  }
}

// window.addEventListener('storage', id => {
//   console.log(id)
// }) 
localStorage.clear()