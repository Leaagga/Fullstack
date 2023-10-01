const Persons=({persons,newFilter,personsService})=>{
    const shownPersons=newFilter
    ?persons.filter(p=>p.name.toLowerCase().includes(newFilter.toLowerCase()))
    :persons

    return(
        <div>
            {shownPersons.map(p=><form onClick={
                ()=>{if (window.confirm(`Delete ${p.name}?`)){
                    personsService
                        .httpdelete(p)
                        .then(response=>console.log(response))}
        }}>
        <label key={p.id}>{p.name} {p.number}</label><button type='button'>delete</button></form>
        )}
        
        </div>
    )
}
export default Persons