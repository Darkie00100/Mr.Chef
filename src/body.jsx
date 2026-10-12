import React from "react"
export default function Body(){
    const [ingrideants,setIngrideants] = React.useState([])
    const IngrideantItemsList = ingrideants.map(ingridient=>{
        return <li key={ingridient}>{ingridient} </li>
    })
    function handelSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newItem = formData.get("ingridents")
        
        if (newItem.trim()!=null) {
            setIngrideants(preIems=>[...preIems,newItem])
            event.currentTarget.reset();

        }
        
    }
    return(
        <div className="itemsform">
            
            <form className="input" onSubmit={handelSubmit}>
                
                <input type="text" 
                placeholder="Enter ingredients"
                name="ingridents" />
                <span><button className="add_ingri"> +Add ingredients</button></span>
                
            </form>

        <ul className="itemList">
         {IngrideantItemsList}
        </ul>
            
        </div>
    )
}