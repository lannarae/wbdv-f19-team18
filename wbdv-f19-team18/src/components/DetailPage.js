import React from 'react';
import RecipeService from "../service/RecipeService";

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeId: this.props.recipeId,
            recipe: {}
        }
    }

    componentDidMount = () => {
        if (!this.state.recipe) {
            const recipeService = RecipeService.getInstance();
            recipeService.searchRecipeInfoById(this.props.recipeId)
                .then(recipe => {
                    this.setState(prevState => {
                        return {
                            recipeId: prevState.recipeId,
                            recipe: recipe
                        };
                    });
                });
        }
    };

    render = () => {
        return (
            <div>
                {recipe.name}
            </div>
        );
    };
}

export default DetailPage;