import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber]=useState('')
  const addperson=(event)=>{
      event.preventDefault()
      const newPerson={
          name:newName,
          number:newNumber,
          id:persons.length+1
        }
      if (persons.findIndex(e=>e.name==newName)!==-1){
        alert(newName+' is already added to phonebook')}
      else{
        setPersons(persons.concat(newPerson))
        }

      setNewName('')
      setNewNumber('')
    } 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addperson}>
        <div>
          name: <input value={newName} onChange={e=>{setNewName(e.target.value)}}/>
        </div>
        <div>
          number:<input value={newNumber} onChange={e=>{setNewNumber(e.target.value)}}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(p=>
          <p key={p.id}>{p.name} {p.number}</p>
        )}
      </div>
    </div>
  )
}

export default App