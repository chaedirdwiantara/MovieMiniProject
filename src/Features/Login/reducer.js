const initialState = {
    username: '',
    password: '',
    isLogged: false,
};

export const Loginreducer = function (state = initialState, action) {
    switch (action.type){
        case 'LOGIN':
            return{
                ...state,
                username: action.username,
                password: action.password,
            };
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                isLogged: true,
            };
        case 'LOG_OUT':
            return{
                ...state,
                isLogged: false,
            };
        default:
            return state;
    }
};