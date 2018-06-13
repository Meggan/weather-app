import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "d4e11fd4bdbf1547b5d617f79d85484d";

class App extends React.Component {
  //creating a state
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  //getWeather func
  getWeather = async (e) => {
    //prevent full page load
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //using async await
    const api_call = await fetch("http://api.openweathermap.org/data/2.5/weather?q="
      + city + "," + country + "&appid=" + API_KEY + "&units=metric");
    const data = await api_call.json();

    if (city && country) {
      console.log(data);

      //set state
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a value"
      });
    }
  }

  //render
  render() {
    return (
      //this is JSX. Babel converts this to JS..
      //Can only have one parent
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
};


//in order to import this.. you need to export it
export default App;