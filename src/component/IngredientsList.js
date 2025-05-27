export default function IngredientsList (props) {
    return (
        <section className="ingredients-section">
                    <h2>Ingredients on hand:</h2>
                    <ul>{props.ingredientsMapped}</ul>

                    {/** conditional render if more than 3 items */}

                    {props.ingredientsMapped.length >3 &&
                        <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients</p> 
                        </div>
                        <button onClick={props.handleRecipe}>Get a recipe</button>                    
                    </div>
                    }
                    
                </section>
    )
}