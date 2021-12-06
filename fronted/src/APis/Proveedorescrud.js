import axios from "axios";
const url = "https://easy-store-backend.herokuapp.com";

export function searchProv(callback){
    axios.get(url+"/Proveedores")
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        callback(err);
    })
}
// export function searchProv(location, callback){
//     axios.get(url+"/Proveedores")
//     .then((res)=>{
//         callback(res);

//     })
//     .catch((err)=>{
//         callback(err);
//     })

// }

export function addProv(prov, callback){
    axios.post(url+"/Proveedores",prov)
        .then((res)=>{
            callback(res.data);
        })
        .catch((err)=>{
            callback(err);
        })
}

export function actualizarProv(prov,callback){
    axios.put(url+"/Proveedores/"+prov.ID,prov)
        .then((res)=>{
            callback(res.data);
        })
        .catch((err)=>{
            callback(err);
        })
}

export function eliminarProv(prov,callback){
    axios.delete(url+"/Proveedores/"+prov.ID)
        .then((res)=>{
            callback(res.data);
        })
        .catch((err)=>{
            callback(err);
        })
}