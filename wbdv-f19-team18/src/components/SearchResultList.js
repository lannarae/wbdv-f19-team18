import React from 'react';
import SearchResult from "./SearchResult";

const SearchResultList = ({recipes}) => {
    console.log(recipes)
    if (recipes) {
        return (
            <ul className="list-group my-3">
                {
                    recipes && recipes.map(recipe => {
                        return (
                            <li key={recipe.id}
                                className="list-group-item">
                                <SearchResult recipe={recipe}/>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
};

export default SearchResultList;