import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./Redux/state";
import {BrowserRouter} from 'react-router-dom';

export let rerender = ( ) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 changeNewText={store.changeNewText.bind(store)}
                 changeDialogMessage={store.changeDialogMessage.bind(store)}
                 addDialogMessage={store.addDialogMessage.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'));

}
rerender()

store.subscribe(rerender)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
