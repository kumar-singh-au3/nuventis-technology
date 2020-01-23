import * as actionsConst from '../actionsConst';

const defaultState = [];

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionsConst.FETCH_POSTS:
            return [...action.payload]
        default:
            return state;
    }
}