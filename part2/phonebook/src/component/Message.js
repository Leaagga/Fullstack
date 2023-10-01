
const Message=({succeedMessage,setSucceedMessage,errorMsg,setErrorMsg})=>{
    if(succeedMessage){
            return(
        <div className="succedmsg">
            {succeedMessage}

        </div>
    )
    }
    if(errorMsg){
        return(
        <div className="errormsg">
            {errorMsg}

        </div>            
        )
    }


}
export default Message