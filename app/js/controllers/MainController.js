class MainController{
    constructor(){
        let $ = document.querySelector.bind(document);
        this._formView = new FormView($('#root'));
        this._messageView = new MessageView($('#messageComponent'));
        this._message = new Message();
        this._usersList = new UsersList();
        
        this._usersListView = new UsersListView($('#root'));
        this._usersListView.update(this._usersList);

        this._usersService = new UsersService('https://private-21e8de-rafaellucio.apiary-mock.com/users');
        this._usersService.getUsers(err => console.log(err), res => this._usersList.saveUsers(res));
    }

    addUser(event){
        event.preventDefault();
        this._usersList.saveUser(this._createUser());
        this._usersListView.update(this._usersList);
        this._message.text = 'Usuário adicionado com sucesso';
        this._messageView.update(this._message);
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

    _initFormElements(){
        let $ = document.querySelector.bind(document);
        this._inputName = $('#name');
        this._inputCpf = $('#cpf');
        this._inputPhone = $('#phone');
        this._inputEmail = $('#email');
    }

    handleRoutes(path){
        //console.log(path);
        
        let routes = {
            '/': 'home',
            '/list': 'list'
        };

        switch(path){
            case '/':
                this._formView.update({});
                this._initFormElements();
                return 'Home view';
            case '/list/':
                console.log('list view');
                console.log(this._usersList.users);
                this._usersService.getUsers(err => console.log(err), res => {
                    this._usersList.saveUsers(res);
                    this._usersListView.update(this._usersList);
                });
                //this._usersListView.update(this._usersList);
                return 'List view'
            default:
                return '404'
        }
    }

}