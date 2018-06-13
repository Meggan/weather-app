import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "d4e11fd4bdbf1547b5d617f79d85484d";

class App extends React.Component {
  //getWeather func
  getWeather = async (e) => {
    //prevent full page load
    e.preventDefault();
    //using async await
    const api_call = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Montreal&mode=json&appid=" +API_KEY+ "&units=metric");
    const data = await api_call.json();
    console.log(data);
  }

  //render
  render(){
    return(
      //this is JSX. Babel converts this to JS..
      //Can only have one parent
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather/>
      </div>
  );
  }
};


//in order to import this.. you need to export it
export default App;