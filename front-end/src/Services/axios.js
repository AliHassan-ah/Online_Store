import axios from "axios"
const path = "http://localhost:4000/"

const getData = (route)=>{
    const result = axios.get(`${path}${route}`)
    return result;
}
const postData = (route,data)=>{
    const result = axios.post(`${path}${route}`,data)
    return result;
}
const putData = (route,data)=>{
    const result = axios.put(`${path}${route}`,data)
    return result;
}
const deleteData = (route,data)=>{
    const result = axios.delete(`${path}${route}`,data)
    return result;
}
export { getData, postData, putData,deleteData }