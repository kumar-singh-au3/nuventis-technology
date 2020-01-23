import * as actionsConst from '../actionsConst';

const defaultState = [];

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionsConst.FETCH_USERS:
            return [...action.payload]
        default:
            return state;
    }
}