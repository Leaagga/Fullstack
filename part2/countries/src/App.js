import axios from 'axios'
import {useState,useEffect} from 'react'
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
    </div>
  )
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
        filteredcount.map(c=><p>{c.name.common}</p>)
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
