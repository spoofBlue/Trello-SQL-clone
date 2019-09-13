
// Actions
import { DISPLAY_LOADING, RESET_COMPONENT, CHANGE_TASKS } from '../actions/index';

// Initial
const initialState = {
    tasks: ["Do the dishes.", "Mow the lawn.", "File those reports."],
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
    } else if (action.type === CHANGE_TASKS) {
        return Object.assign({}, state, {
            loading: false,
            tasks: action.tasks
        });
    }
    return state;
}