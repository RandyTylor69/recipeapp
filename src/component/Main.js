
export default function Main() {

    const ingredients = ['Olive Oil']

    const ingredientsMapped = ingredients.map((ingredient) =>{
        return (
            <li key="ingredient">{ingredient}</li>
        )
    })

    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get('ingredient')
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
    return(
        <main>
            <form onSubmit={handleSubmit}>
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