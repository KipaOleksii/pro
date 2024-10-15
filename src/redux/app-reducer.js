import { getLoginData } from './auth-reducer';

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const initializedSuccess = () => ({ type: SET_INITIALIZED });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getLoginData());
    
    Promise.all([promise])
    .then(() => {
        dispatch(initializedSuccess());
    })
    .catch((error) => {
        console.error("Error during initialization:", error);
    });
}

export default appReducer;
