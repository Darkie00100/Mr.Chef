import React from "react"
export default function Body(){
    const [ingredients,setIngrideants] = React.useState([])
    const IngrediantItemsList = ingredients.map(ingredient=>{
        return <li key={ingredient}>{ingredient} </li>
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

        
                {ingredients.length > 0 && (
    <section className="ingredient-section">
        <h2>Ingredients in Chef Bag</h2>

        <ul className="itemList">
            {IngrediantItemsList}
        </ul>
    </section>
)}

{ingredients.length > 0 && (
    <div className="get-recipie">
        <div>
            <h3>Ready to get Recipe?</h3>
            <p>Generate the recipe from the items in the Chef Bag.</p>
        </div>

        <button className="recipe-Button">
            Get Recipe
        </button>
    </div>
)}

             
        
            
        </div>
    )
}