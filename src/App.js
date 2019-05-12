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

const App = () => {
  return (
  <div>
    <Input />
  </div>
  )
}

const Input = () => {
  return <div>
    <label htmlFor="bar">bar</label>
    <input type="text" onChange={() => {console.log("I am clicked!")}}></input>
  </div>    
}

export default App;
