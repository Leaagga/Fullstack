const Filter=({persons,newFilter,setNewFilter})=>{

    const handlefilterchange=(event)=>{
      setNewFilter(event.target.value)

    }

    return(
        <div>
            filter shown with<input value={newFilter} onChange={handlefilterchange} />
        </div>




    )

       
}


export default Filter

