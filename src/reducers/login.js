export default (login = [], action) => {
    switch (action.type) {
        case 'SAVE_LOGIN_DETAILS':
            return action.payload;
        default:
            return login;
    }
}