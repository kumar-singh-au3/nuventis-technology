import * as actionsConst from '../actionsConst';

const defaultState = false;

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionsConst.SET_LOADER:
            return action.payload
        default:
            return state;
    }
}