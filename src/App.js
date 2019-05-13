// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("I am clicked!")}}></input>
//     </React.Fragment>
//     )
//   }
// }

import React from 'react';
import PropTypes from 'prop-types'

const App = () => {
  const profiles = [
    { name: "TKB_48", age: 15 },
    { name: "HKT_48", age: 12 },
    { name: "NMB_48", age: 14 }
  ]
  return (
  <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
  </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old! </div>    
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
