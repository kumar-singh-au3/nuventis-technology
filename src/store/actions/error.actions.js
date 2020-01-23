import * as actionConst from '../actionsConst';

export const setError =  (error)=>{
    return {
        type: actionConst.SET_ERROR,
        payload: error
    }    
}   
