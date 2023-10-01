const Persons=({persons,newFilter,setPersons,personsService})=>{
    const shownPersons=newFilter
    ?persons.filter(p=>p.name.toLowerCase().includes(newFilter.toLowerCase()))
    :persons

    return(
        <div>
            {shownPersons.map(p=><form onClick={
                ()=>{if (window.confirm(`Delete ${p.name}?`)){
                    personsService
                        .httpdelete(p)
                        .then(()=>setPersons(persons.filter(s=>s.id!==p.id)))}
        }}>
        <label key={p.id}>{p.name} {p.number}</label><button type='button'>delete</button></form>
        )}
        
        </div>
    )
}
export default Persons