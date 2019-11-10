import React from "react";
import SearchResultList from "../components/SearchResultList";
import service from "../service/RecipeService";

const RecipeService = service.getInstance();

const SearchPage = () => {
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
      {console.log(RecipeService.searchRecipeByName("soup"))}
      <SearchResultList
        recipes={[{ id: 1, name: "Curried Coconut Chicken" }]}
      />
    </div>
  );
};

export default SearchPage;
