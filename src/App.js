import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends React.Component {
  render(){
    return(
      //this is JSX. Babel converts this to JS..
      //Can only have one parent
      <div>
        <Titles/>
        <Form/>
        <Weather/>
      </div>
  );
  }
};


//in order to import this.. you need to export it
export default App;