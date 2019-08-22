class FormView extends View {

    constructor(element){
        super(element);
    }

    template(model){
        return `
            <div class="default-form">
                <h2> Cadastro </h2>
                <form onsubmit="controller.addUser(event)">
                    <div id="nameInput" class="form-group"></div>
                    <div id="cpfInput" class="form-group"></div>
                    <div id="phoneInput" class="form-group"></div>
                    <div id="emailInput" class="form-group"></div>
                    <div id="btnComponent" class="form-group"></div>
                </form>
            </div>      
        `
    }

    update(model){
        this._element.innerHTML = this.template(model);       
        
        let inputCpf = new InputCPFComponent('cpf', 'cpf', 'text', 'cpfInput', 'form-group', 'CPF');
        let inputName = new InputTextComponent('name', 'name', 'text', 'nameInput', 'form-group', 'Nome completo (Sem abreviações)', 'Insira no mínimo 3 caracteres');
        let inputPhone = new InputPhoneComponent('phone', 'phone', 'text', 'phoneInput', 'form-group', 'Telefone', 'Insira um número de telefone válido');
        let inputEmail = new InputTextComponent('email', 'email', 'text', 'emailInput', 'form-group', 'E-mail', 'Insira o seu melhor e-mail');
        let button = new ButtonComponent('submit', 'Cadastrar', 'btnComponent', 'btn btn-default');

        inputCpf.append();
        inputName.append();
        inputPhone.append();
        inputEmail.append();
        button.append();
    }
}