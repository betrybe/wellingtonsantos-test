// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { TYPES } from '../actions'

const INITIAL_STATE = {
    moedas: ""
}

const reducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case TYPES.GETMOEADAS:
            state.moedas = action.data
            return state;
        default:
            return state;
    }
};

export default reducer;