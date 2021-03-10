import {createStore} from "redux";
import rootReducer from "./rootReducer";
import {compose} from 'redux'
import cardsReducer from './reducers/cards'

// const composeEnhancers =
//     typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//             // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//         }) : compose;

// const enhancer = composeEnhancers(
//     applyMiddleware(...middleware),
//     // other store enhancers if any
// );

const store = createStore(cardsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
