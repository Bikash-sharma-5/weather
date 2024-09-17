
import { useState } from 'react'
import  axios from 'axios'

import Weather from './components/Weather'


function App() {
   const [data,setData] =useState({})
   const [location,setLocation] =useState("")
   
   const API_KEY="b5f5788a910b122f0eeb8dbb22e71fd7"
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
  const searchLoc=(event)=>{
    if (event.key ===  "Enter") {
       axios.get(url).then((res)=>{
        setData(res.data)
        console.log(res.data);
       })
       setLocation("")
    }
    

  }
  return (
    <div className='w-screen h-screen bg-[url("bg.jpg")]  grid grid-cols-1 gap-4 place-content-center  '>
          <div className='text-center p-6'>
                  <input type="text" className='py-5 px-6 w-[600px]  bg-slate-100 text-slate-500 text-lg rounded-lg ' value={location}placeholder='enter location' onChange={(e)=>setLocation(e.target.value)} onKeyDown={searchLoc} />
          </div>
       <Weather weatherData={data}/>
    </div>
  );
}

export default App
