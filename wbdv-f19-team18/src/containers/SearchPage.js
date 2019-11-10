import React from 'react';
import SearchResultList from "../components/SearchResultList";

const SearchPage = () => {
    return (
        <div>
            <div className="input-group col-md-6">
                <input type="text" className="form-control" placeholder="Search for a recipe"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">Search</button>
                    </div>
            </div>
            <SearchResultList recipes={[{id: 1, name: "Curried Coconut Chicken"}]}/>
        </div>
    );
};

export default SearchPage;