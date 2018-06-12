import React from "react";

class App extends React.Component {
  render(){
    return(
      //this is JSX. Babel converts this to JS..
      //Can only have one parent
      <div>Hello World!
        <h1>hiiiiiiiiii</h1>
      </div>
  );
  }
}


//in order to import this.. you need to export it
export default App;