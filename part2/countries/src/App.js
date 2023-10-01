import axios from 'axios'
import {useState,useEffect} from 'react'
const Weather=({country,})=>{
  const api_key = process.env.REACT_APP_API_KEY
  const [cityweather,setCityWeather]=useState()
  const weatherurl=`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${api_key}&units=metric`
  console.log(weatherurl)
  useEffect(()=>{

    axios
      .get(weatherurl)
      .then(response=>{
        setCityWeather(response.data)
        console.log(response.data)}
      )},[])
  if (cityweather){
  return(
    <div>
    <h2>Weather in {country.capital[0]} </h2>  
    <p>temperture {cityweather.main.temp} Celcius</p> 
      <img src={`https://openweathermap.org/img/wn/${cityweather.weather[0].icon}@2x.png`} alt={cityweather.weather[0].description}></img>
      <p>wind {cityweather.wind.speed}m/s</p>
    </div>
  )    
  }
}
const Country=({country})=>{

  return(
    <div>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h3>languages:</h3>
      <ul>
        {Object.values(country.languages).map(l=><li key={l}>{l}</li>)}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt}/>
      <Weather country={country}/>

    </div>
  ) 
}
const Briefcountry=({c})=>{
  const [clicked,setClicked]=useState(false)
  return(
      <div >
          <form onClick={()=>setClicked(true)}>
          <label>{c.name.common}</label><button type='button' id={c.name.common}>show</button>
          {clicked?<Country country={c}/>:<p></p>}
          </form>
      </div>)

}
const Filterresult=({filteredcount})=>{
  const resu='Too many matches,specify another filter'

  
  if (filteredcount){
    if(filteredcount.length>10){
      return(<p>{resu}</p>)  
      }
    if(filteredcount.length==1){
      return(
        <Country country={filteredcount[0]}/>
      )
    }else{
      return(
        filteredcount.map(c=><Briefcountry c={c}/>)
      )
    }
    }
}
const App=()=>{
  const [countries,setCountries]=useState([])
  const [countFilter,setCountFilter]=useState('')
  useEffect(()=>{
      axios
        .get('https://restcountries.com/v3.1/all')
        .then(response=>{
          console.log(response.data)
          setCountries(response.data)
        })
  },[])
  console.log(countries)
  const filteredcount=countFilter
  ?countries.filter((c)=>c.name.common.toLowerCase().includes(countFilter.toLowerCase()))
  :''
  console.log(filteredcount)
 return(
   <div>
   <div>
     find countries<input value={countFilter} onChange={event=>{setCountFilter(event.target.value)}} />
  </div>
  <Filterresult filteredcount={filteredcount} />
  </div>
)
}

export default App;
