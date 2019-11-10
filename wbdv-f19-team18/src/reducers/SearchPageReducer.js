
const SearchPageReducer = (prevState = {recipes: []}, action) => {
    switch (action.type) {
        case 'UPDATE_ALL_RECIPES': {
            return {
                recipes: action.recipes
            };
        }
        default:
            return prevState;
    }
};

export default SearchPageReducer;