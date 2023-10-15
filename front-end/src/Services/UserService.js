import GenericService from "./GenericService";

class UserService extends GenericService {
    constructor(){
        super()
    }
    //Sign
    //add
    addUser = (data) => this.post("/users/register",data )
    // if delete anything router will look like as follow
    //  addUser = (_id) => this.delete("/users/register" + _id, data )
    // -------------------------------------------------------------------------
    // update Something (here user is taken as an example)
    // updateUser = (_id,data)=> this.put("/users/register" + _id,data)
    // -------------------------------------------------------------------------
    // get Something (here user is taken as an example)
    // getData = (data) => this.get("/users/register")

}   

//Creating Object of the service
let userService = new UserService()
export default userService