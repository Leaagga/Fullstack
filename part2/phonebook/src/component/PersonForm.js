import { useState } from 'react'
const PersonForm=({persons,setPersons})=>{
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