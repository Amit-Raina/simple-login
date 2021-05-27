import {GETTOKEN} from "../constants/index";

const initialState = {
    token:null
}

const rootReducer = (state = initialState , action) => {

    switch(action.type){
        case GETTOKEN : return {...state , token:action.payload};
        default : return {...state , token:null};
    }
}

export default rootReducer;