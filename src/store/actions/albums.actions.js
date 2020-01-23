import * as actionConst from '../actionsConst';
import axios from '../../axiosInstance';

export const fetchAlbums =  (userId)=>{
    return (dispatch,getState)=>{
        
        axios({
            method:'get',
            url:'/albums',
            params:{userId}
        })
        .then((response)=>{
            dispatch({
                type:actionConst.FETCH_ALBUMS,
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