const Persons=({persons,newFilter})=>{
    const shownPersons=newFilter
    ?persons.filter(p=>p.name.toLowerCase().includes(newFilter.toLowerCase()))
    :persons

    return(
        <div>
            {shownPersons.map(p=>
        <p key={p.id}>{p.name} {p.number}</p>
        )}
        
        </div>
    )
}
export default Persons