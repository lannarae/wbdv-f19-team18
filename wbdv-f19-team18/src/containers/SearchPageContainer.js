import React from 'react';
import {connect} from 'react-redux';
import SearchPage from "../components/SearchPage";
import RecipeService from "../service/RecipeService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        recipes: [{ id: 1, name: "Curried Coconut Chicken" }]
    };
};

const service = RecipeService.getInstance();

const dispatcherToPropertyMapper = (dispatch, ownProps) => {
    return {
        searchRecipeByName: name => {
            service.searchRecipeByName(name)
                .then(recipes => {
                    dispatch({
                        type: 'UPDATE_ALL_RECIPES',
                        recipes: recipes
                    });
                });
        }
    };
};

const SearchPageContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(SearchPage);

export default SearchPageContainer;