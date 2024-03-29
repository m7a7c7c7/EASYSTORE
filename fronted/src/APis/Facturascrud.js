import axios from "axios";

const url = "https://easy-store-backend.herokuapp.com";

export function searchFac(callback){
    axios.get(url+"/Facturas")
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        callback(err);
    })
}

export function addFac(fac, callback){
    axios.post(url+"/Facturas",fac)
        .then((res)=>{
            callback(res.data);
        })
        .catch((err)=>{
            callback(err);
        })
}

export function eliminarFac(fac,callback){
    axios.delete(url+"/Facturas/"+fac.ID)
        .then((res)=>{
            callback(res.data);
        })
        .catch((err)=>{
            callback(err);
        })
}