
// Actions
import { DISPLAY_LOADING, RESET_COMPONENTS, NAME_BOARD, CHANGE_TASKS, CHANGE_MEMBERS } from '../actions/index';

// Initial
const initialState = {
    boardId: "11111",
    name: "My Board",
    tasks: ["Do the dishes.", "Mow the lawn.", "File those reports."],
    members: ["myExampleProfile"],
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
    } else if (action.type === RESET_COMPONENTS) {
        // Could set to initialState.  Would then need to pass in boardID after.
        return Object.assign({}, state, {
            loading: false,
            error: null,
            tasks: ["Do the dishes.", "Mow the lawn.", "File those reports."]
        });
    } else if (action.type === NAME_BOARD) {
        return Object.assign({}, state, {
            loading: false,
            name: action.name
        });
    } else if (action.type === CHANGE_TASKS) {
        return Object.assign({}, state, {
            loading: false,
            tasks: action.tasks
        });
    } else if (action.type === CHANGE_MEMBERS) {
        return Object.assign({}, state, {
            loading: false,
            members: action.members
        });
    }
    return state;
}