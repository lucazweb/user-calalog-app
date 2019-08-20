class MainController{
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputName = $('#name');
        this._inputCpf = $('#cpf');
        this._inputPhone = $('#phone');
        this._inputEmail = $('#email');
    }

    addUser(){
        let user = new User(
            this._inputName,
            this._inputCpf,
            this._inputPhone,
            this._inputEmail
        );

        console.log('novo usuário criado ', user );
    }

}