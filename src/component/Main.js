import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false) 

    // form button onclick
    const ingredientsMapped = ingredients.map((ingredient) =>{
        return (
            <li key="ingredient">{ingredient}</li>
        )
    })

    function handleSubmit(formData){
        const newIngredient = formData.get('ingredient')

        setIngredients(
            prevArray => [...prevArray, newIngredient]
        )   
    }

    // recipe button onclick
    function handleRecipe() {
        setRecipeShown(true)
    }
    return(
        <main>
            <form action={handleSubmit}>
                <input 
                type="text" 
                placeholder="e.g. Sichuan Pepper"
                name="ingredient"
                />
                <button>+ Add ingredient</button>
            </form>

            { // conditional render the rest of the page
                ingredientsMapped.length >0 && 
                <IngredientsList ingredientsMapped = {ingredientsMapped} handleRecipe = {handleRecipe}/>
            }

            { // conditional render the recipe from api
                recipeShown && 
                <ClaudeRecipe />
            }
            
            
        </main>
    )
}