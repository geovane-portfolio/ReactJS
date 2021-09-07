const initState = {
    name: ''
};

const userReducer = (state = initState, action) => {

    switch(action.type) {
        case 'SET_NAME': 
            return {...state, name: action.payload.name};
            break;
    }

    return state;
};

export default userReducer;