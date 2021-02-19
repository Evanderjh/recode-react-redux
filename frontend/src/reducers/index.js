import { combineReducers } from 'redux';

function operacao(state = 0, action) {
    switch (action.type) {
        case "SOMAR":
            return state + action.payload;
            break;
        case "SUBTRAIR":
            return state - action.payload;
            break;
        case "RESETAR":
            return state = 0;
            break;
        default:
            return state;
    }    
}


function lista(state = { contas: [] }, action ) {
    switch (action.type) {
        case "LISTAR":
            return { contas: [...state.contas, action.payload ]};
            break
        case "APAGAR":
            return { contas: [] };
            break
        default:
            return state;
    }
}

const reducers = combineReducers( {operacao, lista} );

export default reducers;