import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('SET_SPECIFIC_MOVIE', selectSpecificMovie);
    
   
}

function* fetchMovies(action) {
    try{
        const moviesResponse = yield axios.get('/movies')
        yield put({type: 'SET_MOVIES', payload: moviesResponse.data})
    }catch(error) {
        console.log('error fetching movies', error);
        
    }
}

function* selectSpecificMovie(action) {
    try{
        yield put({type: 'SET_MOVIE_ITEM', payload: action.payload})
        const movieGenres = yield axios.get(`/movies/details?id=${action.payload.id}`)
        console.log(movieGenres);
        yield put({type: 'SET_TAGS', payload: movieGenres.data })
        
        // yield put({type: 'SET_MOVIE_ITEM', payload: movieGenres })
    }catch(error) {
        console.log('error selecting movie', error);
        
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}


const movieItemReducer = (state = 1, action) => {
    switch (action.type) {
        case 'SET_MOVIE_ITEM':
            return action.payload;
        default:
            return state;
    }  
}


// Used to store the movie genres
const genresReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

const editReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_MOVIE':
            return action.payload
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        moviesReducer,
        genresReducer,
        movieItemReducer,
       
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
