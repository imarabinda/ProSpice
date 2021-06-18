import request from "../utilities/fetch";


export function downloadConfig(){

const data= request.get('v1/settings');
data.then(resp=>{
    console.log(resp)
})
}