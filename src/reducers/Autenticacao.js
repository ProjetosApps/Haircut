const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    colapse: false,
    change: 0,
}

export default (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case "MODIFICA_NOME":
          return {...state, nome: action.payload};
        case "MODIFICA_SENHA":
          return {...state, senha: action.payload};
        case "MODIFICA_COLAPSE":
          
          return {...state, colapse: action.payload,};
        default:
        return {...state };
    }
}