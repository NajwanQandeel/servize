import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import persistedReducer from './reducers/rootReducer';

// const initialState = {};

const middleware = [thunk];

const store = createStore(
<<<<<<< HEAD
    persistedReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
=======
    persistedReducer
    // initialState,
    // compose(
        // applyMiddleware(...middleware),
>>>>>>> 57236b1aeb8935a1aef9e126eaed1630b81ff683
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const persistor = persistStore(store);

export { store, persistor }