import React from "react";

const key = "d36e2f36f3e44818967b12d4bdb6d7ac";

export default class RecipeService {
  static instance = null;
  static getInstance = () => {
    if (this.instance == null) {
      this.instance = new RecipeService();
    }
    return this.instance;
  };

  searchRecipeByName = name => {
    fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(response => response.json());
  };

  searchRecipeInfoById = id => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(response => response.json());
  };
}
