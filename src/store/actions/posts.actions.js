import * as actionConst from '../actionsConst';
import axios from '../../axiosInstance';


export const fetchPosts =  (userId)=>{
    return (dispatch,getState)=>{
        
        axios({
            method:'get',
            url:'/posts',
            params:{userId}
        })
        .then((response)=>{
            dispatch({
                type:actionConst.FETCH_POSTS,
                payload: response.data 
            });
        })
        .catch(({response})=>{
            dispatch({
                type:actionConst.SET_ERROR,
                payload: "Some Error Occurred"
            });
        });
    }   
}