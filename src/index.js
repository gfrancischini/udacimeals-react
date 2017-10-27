import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

// 
let persistedState = {};
try {
    persistedState = localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")) : null;
} 
catch (e) {
    console.log("The persisted stated failed to load: " + e);
}

const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//where should I subscribe for this
store.subscribe(() => {
    localStorage.setItem("state", JSON.stringify(store.getState()));
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
