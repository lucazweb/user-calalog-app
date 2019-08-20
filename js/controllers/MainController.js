class MainController{
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputName = $('#name');
        this._inputCpf = $('#cpf');
        this._inputPhone = $('#phone');
        this._inputEmail = $('#email');

        this._usersList = new UsersList();
    }

    addUser(event){
        event.preventDefault();
        this._usersList.saveUser(this._createUser());
        console.log(this._usersList.users);
    }

    _createUser(){
        return new User(
            this._inputName,
            this._inputCpf,
            this._inputPhone,
            this._inputEmail
        );
    }

}