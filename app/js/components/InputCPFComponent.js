class InputCPFComponent extends InputComponent{
    
    constructor(id, name, type, parentId, className = null, placeholder = null, validatorMessage = null){
        super(id, name, type, parentId, className, placeholder);

        this._input.addEventListener('keyup', e => this._handleCpfValidation(e));
        this._parentElement = document.querySelector(`#${parentId}`);
        this._validatorLabel = document.createElement('small');
        this._validatorLabel.innerHTML = validatorMessage ? validatorMessage : 'Campo inválido';
    }

    /** CPF Input validation style and message */
    _handleCpfValidation(e){
        if(!CPFHelper.VerifyCPF(e.target.value)){
            this._input.className += ' invalid'
            this._parentElement.append(this._validatorLabel);
        } else {
            this._input.classList.remove('invalid');
            this._validatorLabel.remove();
        }
    }

}