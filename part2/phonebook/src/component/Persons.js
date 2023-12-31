const Persons=({persons,newFilter,setPersons,personsService,setErrorMsg,setSucceedMessage})=>{
    const shownPersons=newFilter
    ?persons.filter(p=>p.name.toLowerCase().includes(newFilter.toLowerCase()))
    :persons

    return(
        <div>
            {shownPersons.map(p=><form >
        <label key={p.id}>{p.name} {p.number}</label><button type='button' onClick={
                ()=>{if (window.confirm(`Delete ${p.name}?`)){
                    personsService
                        .httpdelete(p)
                        .then(()=>{setPersons(persons.filter(s=>s.id!==p.id))
                            setSucceedMessage(`Removed ${p.name}`)
                            setTimeout(()=>setSucceedMessage(null),5000)})
                        .catch(()=>{
                            setErrorMsg(`Information of ${p.name} has already been removed from server`)
                            setPersons(persons.filter(s=>s.id!==p.id))
                            setTimeout(()=>setErrorMsg(null),5000)
                            
                        })
                        }
        }}>delete</button></form>
        )}
        
        </div>
    )
}
export default Persons