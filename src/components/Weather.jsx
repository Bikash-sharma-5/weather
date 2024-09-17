import React from "react";

const Weather = ({ weatherData }) => {
  return (
    <div className="flex justify-center text-gray-400 font-sans ">
      {weatherData.weather ? (
        <div className=" w-[500px] h-[600px] bg-opacity-20 backdrop-blur-lg rounded-md drop-shadow-lg flex flex-col align-middle text-center" >
          <div className="flex justify-between w-full h-[100px]  py-4">
            <div>
              <p className=" text-lg text-gray-400 flex flex-col font-sans">
                <h1 className="font-sans">  City Name:</h1>
               {weatherData.name},{weatherData.sys.country}
              </p>
            </div>
            </div>
            <div className="text-lg flex flex-row justify-evenly  align-middle px-0">
             <div className="flex flex-col py-6">
             <h1 className="font-sans"> description: </h1>
             <h1 className="font-sans">{weatherData.weather[0].description}</h1>
             </div>
              <div className=" flex flex-col justify-between">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  className="w-[120px]"
                  alt=""
                />
              </div>
            </div>

           <div className="flex flex-col  align-middle w-[500px]">
           <div className="h-[100px] flex flex-col align-middle justify-center font-sans">
              Temperature:
              <h1 className="font-semibold font-sans">
                {weatherData.main.temp.toFixed()}°C
              </h1>
            </div>

            <div className="h-[100px] flex flex-col align-middle justify-center">
              <p className="font-sans">Humidity:</p>
              <p className="font-sans">{weatherData.main.humidity}%</p>
            </div>
          
          <div className="h-[100px] flex flex-col align-middle justify-center">
            <p className="font-sans">WIND:</p>
            <p className="font-sans">{weatherData.wind.speed.toFixed()} KPH</p>
          </div>
          <div className="h-[100px] flex flex-col align-middle justify-center">
            <p className="font-sans">WIND PRESSURE:</p>
            <p className="font-sans">{weatherData.main.pressure.toFixed()} hPa</p>
          </div>
           </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
