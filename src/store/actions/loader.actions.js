import * as actionConst from '../actionsConst';

export const setLoading =  (loading)=>{
    return {
        type: actionConst.SET_LOADER,
        payload: loading
    }
//     return dispatch=>{
//        dispatch({
//         type: actionConst.SET_LOADER,
//         payload: loading
//     })   
// } 
}   
