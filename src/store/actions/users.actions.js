import * as actionConst from '../actionsConst';
import axios from '../../axiosInstance';
import { setLoading } from './loader.actions';


export const fetchUsers =  (userId)=>{
    return (dispatch,getState)=>{
        axios.get('/users')
        .then((response)=>{
            dispatch({
                type:actionConst.FETCH_USERS,
                payload: response.data 
            });
            dispatch(setLoading(false));
        })
        .catch(({response})=>{
            dispatch(setLoading(false));
            dispatch({
                type:actionConst.SET_ERROR,
                payload: "Some Error Occurred"
            });
        });
    }   
}