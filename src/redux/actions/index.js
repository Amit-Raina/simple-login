import {GETTOKEN} from "../constants/index";

export const getToken = (data) => {
    return{
        type:GETTOKEN,
        payload:data
    }    
}


