const initialState = {
    profile: [],
    feedList: [],
};

export const Homereducer = function (state = initialState, action) {
    switch (action.type){
        case 'TYPE_DATA_PROFILE':
            return{
                ...state,
                profile: action.payload,
            };
        case 'FETCH_DATA_FEED_LIST':
            return{
                ...state,
                feedList: action.payload,
            };
            default:
                return state;
    }
}