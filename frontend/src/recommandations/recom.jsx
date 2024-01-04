/*
import React, { useRef, useState, useEffect } from "react";
import "./recom.css";
import axios from "axios";
import rec from "./rec"


const Recom = () => {
  const key = "020d191d43be09bb79c4349744904d41";
  const resultRef = useRef(null);
  const btnRef = useRef(null);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [temperature, setTemperature] = useState(0);
  const [resultat, setResultat] = useState(null);
  

  const onSearchChange = async (event) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${key}&units=metric`
      );
      const data = await response.json();
  
      setTemperature(data.main.temp);
  
      resultRef.current.innerHTML = `
        <div class="meteo">
          <h1>${event.target.value}</h1>
          <h2>${data.weather[0].description}</h2>
          <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather icon"></img>
          <h1 class="valeur">${data.main.temp} °C</h1>
          <h3>min : ${data.main.temp_min}</h3>
          <h3>max : ${data.main.temp_max}</h3>
        </div>
      `;
  
      btnRef.current.innerHTML = `<button className="getr">Get Recommendation</button>`;
    } catch (error) {
      resultRef.current.innerHTML = `<h2>City not found</h2>`;
      alert(error);
    }
  };

  useEffect(() => {
    const btn = btnRef.current && btnRef.current.querySelector(".getr");
    if (btn) {
      btn.addEventListener("click", handleRecommendationClick);
    }
  
    return () => {
      if (btn) {
        btn.removeEventListener("click", handleRecommendationClick);
      }
    };
  }, [btnRef]);
  
  

  const handleRecommendationClick = () => {
    axios.post("http://localhost:3001/recommend", { temperature: temperature })
      .then((response) => {
        setResultat(response.data);
        setShowRecommendation((prevValue) => !prevValue);
      })
      .catch((error) => {
        console.error("Error fetching recommendation:", error);
        // Handle error as needed
      });
  };

  useEffect(() => {
    if (showRecommendation) {
      handleRecommendationClick();
    }
  }, [showRecommendation]);

  return (
    <div className="page">
      <div className="weather">
        <input
          className="getw"
          type="text"
          placeholder="enter your city here"
          onChange={onSearchChange}
        />
        <div ref={resultRef}></div>
      </div>
      <div className="recom">
        {showRecommendation && <rec  top = {resultat.top} bot= { resultat.bot} shoes ={resultat.shoe} accessorie={resultat.accessorie} hat={resultat.hat}   />}
      </div>
    </div>
  );
};

export default Recom;
*/

import React, { useRef, useState, useEffect } from "react";
import "./recom.css";
import axios from "axios";
import Rec from "./Tec";


const Recom = () => {
  const key = "020d191d43be09bb79c4349744904d41";
  const resultRef = useRef(null);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [temperature, setTemperature] = useState(0);
  const [resultat, setResultat] = useState(null);

  const onSearchChange = async (event) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${key}&units=metric`
      );
      const data = await response.json();

      setTemperature(data.main.temp);

      resultRef.current.innerHTML = `
        <div class="meteo">
          <h1>${event.target.value}</h1>
          <h2>${data.weather[0].description}</h2>
          <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather icon"></img>
          <h1 class="valeur">${data.main.temp} °C</h1>
          <h3>min : ${data.main.temp_min}</h3>
          <h3>max : ${data.main.temp_max}</h3>
        </div>
      `;

      // No need to manually set innerHTML for the button here
    } catch (error) {
      resultRef.current.innerHTML = `<h2>City not found</h2>`;
    }
  };

  const handleRecommendationClick = () => {
    axios.post("http://localhost:3001/recommend", { temperature: temperature })
      .then((response) => {
        setResultat(response.data);
        setShowRecommendation(true);
      })
      .catch((error) => {
        console.error("Error fetching recommendation:", error);
        // Handle error as needed
      });
  };

  return (
    <div className="page">
      <div className="weather">
        <input
          className="getw"
          type="text"
          placeholder="enter your city here"
          onChange={onSearchChange}
        />
        <div ref={resultRef}></div>
        <button className="getr" onClick={handleRecommendationClick}>Get Recommendation</button>
      </div>
      <div className="recom">
        {showRecommendation && <Rec top={resultat.top} bot={resultat.bot} shoes={resultat.shoe} accessorie={resultat.accessorie} hat={resultat.hat} />}
      </div>
    </div>
  );
};

export default Recom;
