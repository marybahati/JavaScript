import React from 'react';
import Child from './Child'
import Sibling from './Sibling'

class App extends React.Component{
// constructor must take props as a parameter
// must type  super(props) to call the parent constructor
  constructor (props){
 super(props)
 this.state={
   name:'Mary Noon Kamau'
 }
 this.changeName=this.changeName.bind(this)
  }
  
  changeName(){
    this.setState({name:"Jason Madiaba"})
  }


  render(){
    return (
      <div>
        <Sibling name={this.state.name} />
          {/* <h1>{this.state.name}</h1> */}
          <Child  changeName={this.changeName}/>
          <h1>{this.props.gender}</h1>
          </div>     
    )
}
}

App.defaultProps={
  gender:"Female"
}

// App.propTypes={
//   gender:React.propTypes.string
// }
export default App;
