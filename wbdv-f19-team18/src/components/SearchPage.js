import React from "react";
import SearchResultList from "../components/SearchResultList";
import service from "../service/RecipeService";

let recipeService = service.getInstance();

export default class SearchPage  extends React.Component {

    componentDidMount() {
        console.log("Component Did Mount")

        console.log(recipeService.searchRecipeByName("soup"))
    }

    render(){
        return (
            <div>
                <div className="input-group col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for a recipe"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            Search
                        </button>
                    </div>
                </div>
                <SearchResultList
                    recipes={[{ id: 1, name: "Curried Coconut Chicken" }]}
                />
            </div>
        );
    }
};


