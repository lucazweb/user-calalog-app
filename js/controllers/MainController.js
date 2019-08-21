class MainController{
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputName = $('#name');
        this._inputCpf = $('#cpf');
        this._inputPhone = $('#phone');
        this._inputEmail = $('#email');

        this._usersList = new UsersList();
        this._usersListView = new UsersListView($('#usersList'));
        this._usersListView.update(this._usersList);
    }

    addUser(event){
        event.preventDefault();
        this._usersList.saveUser(this._createUser());
        this._usersListView.update(this._usersList);
    }

    _createUser(){
        return new User(
            this._inputName.value,
            this._inputCpf.value,
            this._inputPhone.value,
            this._inputEmail.value
        );
    }

    _clearForm(){
        this._inputName.value = '';
        this._inputCpf.value = '';
        this._inputPhone.value = '';
        this._inputEmail.value = '';       
    }

}