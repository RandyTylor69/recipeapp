import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([]) 

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

            <ul>
                {ingredientsMapped}
            </ul>
        </main>
    )
}