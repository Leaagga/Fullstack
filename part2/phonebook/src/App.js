import { useState,useEffect } from 'react'
import Filter from './component/Filter'
import PersonForm from './component/PersonForm'
import Persons from './component/Persons'
import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newFilter,setNewFilter]=useState('')
    useEffect(()=>{
      axios
        .get('http://localhost:3001/persons')
        .then(response=>{
          setPersons(response.data)
        })
    },[])
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} newFilter={newFilter} setNewFilter={setNewFilter} />

      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons}/>

      <h2>Numbers</h2>
      
      <Persons persons={persons} newFilter={newFilter}/>

    </div>
  )
}

export default App