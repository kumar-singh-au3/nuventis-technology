import * as actionsConst from '../actionsConst';

const defaultState = "";

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionsConst.SET_ERROR:
            return action.payload
        default:
            return state;
    }
}