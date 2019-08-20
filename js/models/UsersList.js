class UsersList{
    constructor(){
        this._usersList = [];
    }

    get users(){
        return [].concat(this._usersList);
    }

    addUser(user){
        this._usersList.push(user);
    }

}