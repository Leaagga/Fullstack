import { useState } from 'react'
import Filter from './component/Filter'
import PersonForm from './component/PersonForm'
import Persons from './component/Persons'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newFilter,setNewFilter]=useState('')

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