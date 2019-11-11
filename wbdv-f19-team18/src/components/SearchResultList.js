import React from 'react';
import SearchResult from "./SearchResult";
import { Link } from "react-router-dom";

const SearchResultList = ({recipes}) => {
    console.log(recipes)
    if (recipes) {
        return (
            <ul className="list-group my-3">
                {
                    recipes && recipes.map(recipe => {
                        return (
                            <Link to={`./recipe/${recipe.id}`}>
                                <li key={recipe.id}
                                    className="list-group-item">
                                    <SearchResult recipe={recipe}/>
                                </li>
                            </Link>
                        );
                    })
                }
            </ul>
        );
    }
};

export default SearchResultList;