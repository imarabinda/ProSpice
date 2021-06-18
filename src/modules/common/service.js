import request from "./../../utilities/fetch";


export const loadConfigsService = (data) => request.get('v1/settings?last_load='+data);

export const sendToken =(data)=>request.post('v1/push',data);
