import { TYPES } from '../actions'

const INITIAL_STATE = {
    user: {
        email: '',
      },
      wallet: {
        currencies: [],
        expenses: []
      }
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.LOGIN:
            state.user.email = action.data
            return state;
        case TYPES.LOGOUT:
            state.user.email = ""
            return state;
        default:
            return state;
    }
};

export default reducer;