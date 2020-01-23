import {createStore,applyMiddleware,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import postsReducer from './reducers/posts.reducers';
import albumsReducer from './reducers/albums.reducers';
import usersReducer from './reducers/users.reducers';
import loaderReducer from './reducers/loader.reducers';
import errorReducer from './reducers/error.reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default createStore(combineReducers({
    posts: postsReducer,
    albums: albumsReducer,
    users: usersReducer,
    loading: loaderReducer,
    error: errorReducer
}),composeEnhancers(applyMiddleware(thunk)));