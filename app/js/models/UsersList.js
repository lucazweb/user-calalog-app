class UsersList{
    constructor(){
        this._usersList = JSON.parse(localStorage.getItem('usersList')) || [];
    }

    get users(){
        return [].concat(this._usersList);
    }

    saveUser(user){
        this._usersList.push({
            name: user.name,
            cpf: user.cpf,
            phone: user.phone,
            email: user.email
        });
        this._persistListData();
    }

    saveUsers(arr){
        arr.forEach( user => {
            if(this._usersList.filter(item => item.cpf === user.cpf).length === 0)
                this.saveUser({
                    name: user.name,
                    cpf: user.cpf,
                    phone: user.phone,
                    email: user.email
                });
        });
        this._persistListData();
    }

    _persistListData(){
        localStorage.setItem('usersList', JSON.stringify(this._usersList));
    }

    _removeLocalList(){
        localStorage.removeItem('usersList');
    }

}