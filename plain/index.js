/* import { createStore } from './node_modules/redux/dist/redux.js'; */

const initisalState = {
    isVisible: false
}

//Named constant
const BUTTON_CLICKED = "BUTTON_CLICKED"

// Action creators
const ButtonClickedAction = () => {   
    return {type: BUTTON_CLICKED}
}

const rootReducer = (state = initisalState, action) => {
    switch (action.type) {
        case BUTTON_CLICKED:
            return {...state, isVisible: true}
        default:
            return state
    }
}

const Store = Redux.createStore(rootReducer, + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const btn = document.getElementById('btn1');
btn.addEventListener('click', () => {
    Store.dispatch(ButtonClickedAction());
});

Store.subscribe(() => {
    if (Store.getState().isVisible) {
       const div = document.getElementById('div');
       div.style.display='block';
    }
});