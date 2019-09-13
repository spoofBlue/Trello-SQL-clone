
// Actions
export const DISPLAY_LOADING = `DISPLAY_LOADING`;
export const displayLoading = () => ({
    type: DISPLAY_LOADING
});

export const RESET_COMPONENTS = `RESET_COMPONENTS`;
export const resetComponents = () => ({
    type: RESET_COMPONENTS
})

export const CHANGE_TASKS = `CHANGE_TASKS`;
export const changeTasks = (tasks) => ({
    type: CHANGE_TASKS,
    tasks
})

export const NAME_BOARD = 'NAME_BOARD';
export const nameBoard = (name) => ({
    type: NAME_BOARD,
    name
})

export const CHANGE_MEMBERS = `CHANGE_MEMBERS`;
export const changeMembers = (members) => ({
    type: CHANGE_MEMBERS,
    members
})

export const removeTaskFromBoard = (tasks, index) => dispatch => {
    console.log(`remove task at index: `, index);
    console.log(tasks);
    const newTasks = tasks.filter(task => task !== index);    //Note, this assumes we're still using the task text as the task's index.
    dispatch(changeTasks(newTasks));
}

export const addTaskToBoard = (tasks, text) => dispatch => {
    console.log('add task: ', text);
    console.log(tasks);
    const newTasks = [...tasks, text];
    dispatch(changeTasks(newTasks));
}

export const addMemberToBoard = (members, text) => dispatch => {
    console.log('add member: ', text);
    const newMembers = [...members, text];
    dispatch(changeMembers(newMembers));
}