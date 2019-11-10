import React from 'react';
import './App.css';
import SearchPageContainer from "./containers/SearchPageContainer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import SearchPageReducer from "./reducers/SearchPageReducer";

const App = () => {
    const store = createStore(SearchPageReducer);
    return (
        <div className="container-fluid my-3">
            <Provider store={store}>
                <SearchPageContainer/>
            </Provider>
        </div>
    );
};

export default App;
