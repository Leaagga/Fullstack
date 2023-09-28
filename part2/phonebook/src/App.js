import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const addperson=(event)=>{
      event.preventDefault()
      const newPerson={
          name:newName
        }
      if (persons.findIndex(e=>e.name==newName)!==-1){
        alert(newName+' is already added to phonebook')}
      else{
        setPersons(persons.concat(newPerson))
        }

      setNewName('')
    } 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addperson}>
        <div>
          name: <input value={newName} onChange={e=>{setNewName(e.target.value)}}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(p=>
          <p key={p.name}>{p.name}</p>
        )}
      </div>
    </div>
  )
}

export default App