class InputCPFComponent extends InputComponent{
    
    constructor(id, name, type, parentId, className = null, placeholder = null, validatorMessage = null){
        
        super(id, name, type, parentId, className, placeholder);

        VMasker(this._input).maskPattern('999.999.999-99');

        this._input.addEventListener('keyup', e => this._handleValidation(e));
        this._parentElement = document.querySelector(`#${parentId}`);
        this._validatorLabel = document.createElement('small');
        this._validatorLabel.innerHTML = validatorMessage ? validatorMessage : 'Campo inválido';
    }

    /** CPF Input validation style and message */
    _handleValidation(e){
        if(!CPFHelper.VerifyCPF(CPFHelper.HandleCPFStringFormat(e.target.value))){
            this._input.className += ' invalid'
            this._parentElement.append(this._validatorLabel);
        } else {
            this._input.classList.remove('invalid');
            this._validatorLabel.remove();
        }
    }

}