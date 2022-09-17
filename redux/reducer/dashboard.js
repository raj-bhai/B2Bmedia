import {
    TASKS,
    CLIENTTYPE
} from '../action/dashboard';


const initialState = {
    Task: [],
    ClientType: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TASKS:
            return {
                ...state,
                Task: action.data,
            };
        case CLIENTTYPE:
            return {
                ...state,
                ClientType: action.data,
            };
    }
    return state;
}