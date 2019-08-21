class MainController{
    constructor(){
        let $ = document.querySelector.bind(document);
        this._usersList = new UsersList();
        this._formView = new FormView($('#root'));
        this._usersListView = new UsersListView($('#root'));
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

    _initFormElements(){
        let $ = document.querySelector.bind(document);
        this._inputName = $('#name');
        this._inputCpf = $('#cpf');
        this._inputPhone = $('#phone');
        this._inputEmail = $('#email');
    }

    handleRoutes(path){
        console.log(path);
        
        let routes = {
            '/': 'home',
            '/list': 'list'
        };

        switch(path){
            case '/':
                console.log('home view');
                this._formView.update({});
                this._initFormElements();
                return 'Home view';
            case '/list':
                this._usersListView.update(this._usersList);
                return 'List view'
            default:
                return '404'
        }



    }

}