import {TASKS} from '../action/dashboard';


const initialState = {
    Task: [],
};

export default(state = initialState, action) => {
    switch (action.type){
        case TASKS:
            return{
                ...state,
                Task: action.data,
            };
           }
    return state;
}