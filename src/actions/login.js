import * as api from '../api';

export const loginDetails = (loginDetails) => async (dispatch) =>{
    try{
        const { data } = await api.login(loginDetails);
        dispatch({ type: 'SAVE_LOGIN_DETAILS', payload: data});
    }catch(err) {
        console.log(err);
    }
}