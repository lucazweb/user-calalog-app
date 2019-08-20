class UsersList{
    constructor(){
        this._usersList = [];
    }

    get users(){
        return [].concat(this._usersList);
    }

    saveUser(user){
        this._usersList.push(user);
        // this._persistUserData();
    }

    _persistUserData(){
        localStorage.setItem('AppUsers', JSON.stringify(this._usersList));
    }

}