import React from 'react';
import SearchResult from "./SearchResult";

const SearchResultList = ({recipes}) => {
    console.log(recipes)
    if (recipes) {
        return (
            <ul className="list-group">
                {
                    recipes && recipes.map(recipe => {
                        return (
                            <li className="list-group-item">
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