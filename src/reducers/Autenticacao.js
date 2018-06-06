const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
}

export default (state = INITIAL_STATE, action) => {
    console.log('ó aqui a action', action);
    return state;
}