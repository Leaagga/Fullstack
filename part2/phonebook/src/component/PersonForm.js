import axios from 'axios'
import { useState } from 'react'
const PersonForm=({persons,setPersons,personsService})=>{
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
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
                const found=persons.find(p=>p.name==newName)
                newPerson.id=found.id
                personsService
                    .update(found.id,newPerson)
                    .then(response=>{
                        setPersons(persons.map(s=>s.id==found.id?response:s))
                    })
            }}
        else{
        personsService
            .create(newPerson)
            .then(response=>{
                console.log(response)
                setPersons(persons.concat(response))
            })
// setPersons(persons.concat(newPerson))
            }

        setNewName('')
        setNewNumber('')
        }


    return(
        <form onSubmit={addperson}>
            <div>
                name: <input value={newName} onChange={e=>{setNewName(e.target.value)}} />
            </div>
            <div>
                number:<input value={newNumber} onChange={e=>{setNewNumber(e.target.value)}} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>

    )

}

export default PersonForm