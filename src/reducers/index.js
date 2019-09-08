
// Actions
import { DISPLAY_LOADING, RESET_COMPONENT } from '../actions/index';

// Initial
const initialState = {
    loading: false,
    error: null
}


//Reducer
export default function rootReducer(state = initialState, action) {
    if (action.type === DISPLAY_LOADING) {
        console.log(`ran displayLoading`);
        return Object.assign({}, state, {
            loading: true,
        });
    } else if (action.type === RESET_COMPONENT) {
        return Object.assign({}, state, {
            loading: false,
            error: null
        });
    }
    return state;
}