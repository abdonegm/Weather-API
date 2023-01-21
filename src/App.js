import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setdata] = useState({});
  const [location, setlocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9bc63e1031397dbe8937e0e58efd114f`;

  const searchlocation = (e) => {
    if (e.keyCode === 13) {
      axios.get(url).then((respo) => {
        setdata(respo.data);
        console.log(respo.data);
      });
      setlocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          placeholder="Enter Location ...."
          onChange={(e) => setlocation(e.target.value)}
          onKeyDown={searchlocation}
          type="text"
        />
      </div>

      <div class="container">
        <div className="top">
          <div className="location">
            <p> {data.name}</p>
          </div>
          <div className="temp">
            <h1>{data.main ? `${data.main.temp}` : ""}</h1>
          </div>
          <div className="description">
            <p>{data.weather ? `${data.weather[0].main}` : ""}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>{data.main ? `${data.main.feels_like}` : ""}</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p>{data.main ? `${data.main.humidity}` : ""}</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>{data.wind ? `${data.wind.speed}` : ""}</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
