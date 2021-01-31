const initialState = {
    theme: 'light',
    language: 'indonesia',
    isLoading: false,
};

export const GlobalReducer = function (state = initialState, action) {
    switch (action.type){
        case 'SET_THEME':
            return {
                ...state,
                theme: action.payload,
            };
        case 'SET_LANGUAGE':
            return {
                ...state,
                language: action.payload,
            };
        default:
            return state;
    }
};