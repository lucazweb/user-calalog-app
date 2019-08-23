class UsersList{
    constructor(){
        this._usersList = JSON.parse(localStorage.getItem('usersList')) || [];
    }

    get users(){
        return [].concat(this._usersList);
    }

    saveUser(user, cb = null){
        if(this._usersList.filter(item => item.cpf === user.cpf).length === 0){
            this._usersList.push({
                name: user.name,
                cpf: user.cpf,
                phone: user.phone,
                email: user.email
            });
            if(cb) cb(false, 'Usuário registrado com sucesso.');
            this._persistListData();
        } else {
            if(cb) cb(true, 'Usuário já existe na lista');
        }
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