import { combineReducers } from 'redux';
import { GET_USER } from '../actions';

const initalState = {
    user: ""
}

export default ( state = initalState, action ) => {
    switch(action.type) {
        case GET_USER:
        console.log("GET USER")
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

// export default combineReducers({
//     user: getUser,
// });