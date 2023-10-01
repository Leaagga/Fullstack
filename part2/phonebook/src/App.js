import { useState,useEffect } from 'react'
import Filter from './component/Filter'
import PersonForm from './component/PersonForm'
import Persons from './component/Persons'
import axios from 'axios'
import personsService from './services/persons'
const App = () => {
    const [persons, setPersons] = useState([])
    const [newFilter,setNewFilter]=useState('')
    useEffect(()=>{
      personsService
        .getAll()
        .then(response=>{
          setPersons(response)
        })
    },[])
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} newFilter={newFilter} setNewFilter={setNewFilter} />

      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} personsService={personsService}/>

      <h2>Numbers</h2>
      
      <Persons persons={persons} setPersons={setPersons} newFilter={newFilter} personsService={personsService}/>

    </div>
  )
}

export default App