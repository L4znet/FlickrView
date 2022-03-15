import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Results from "./Results";
import './index.css';
import Favorites from "./favorites";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./redux/rootReducer";
const store = createStore(rootReducer)

function changeLanguage(language) {
    return {
        type: 'ADD_TODO',
        language
    }
}

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="results/:search" element={<Results />} />
            <Route path="favorites" element={<Favorites />} />
        </Routes>
    </BrowserRouter>
</Provider>,
  document.getElementById('root'),

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
