import React,{useState} from "react";
import "./Tempreature_control.css"

function Tempreature_control(){
    const [temperatureValue, setTemperatureValue] = useState(10);
    const [temperatureColor, setTemperatureColor] = useState("cold");
    const [message, setMessage] = useState("Tempreature too cold");
  
    const increaseTemperature = () => {
      if (temperatureValue === 30) return;
  
      const newTemperature = temperatureValue + 1;
  
      setTemperatureValue(newTemperature);
      if (newTemperature >= 15) {
        setTemperatureColor("hot");
        setMessage("ooh tempreature is warm!");
      }
    };
  
    const decreaseTemperature = () => {
      if (temperatureValue === 0) return;
  
      const newTemperature = temperatureValue - 1;
      setTemperatureValue(newTemperature);
      if (newTemperature < 20) {
        setTemperatureColor("cold");
        setMessage("ooh tempreature is cold !");
      }
    };
  
    return (
      <div className="app-container">
        <div className="temperature-display-container">
          <div className={`temperature-display ${temperatureColor}`}>
            {temperatureValue}°C
          </div>
        </div>
        <div className="button-container">
          <button onMouseDown={increaseTemperature}>+</button>
          <button onClick={decreaseTemperature}>-</button>
        </div>
        <h2>{message}</h2>
      </div>
    );
  };
export default Tempreature_control