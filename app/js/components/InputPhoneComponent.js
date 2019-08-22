class InputPhoneComponent extends InputComponent{
    constructor(id, name, type, parentId, className = null, placeholder = null, validatorMessage = null){
        super(id, name, type, parentId, className, placeholder, validatorMessage);
    }


    _handleValidation(e){
        if(e.target.value.length <= 8 ){
            this._input.className += ' invalid'
            this._parentElement.append(this._validatorLabel);
        } else {
            this._input.classList.remove('invalid');
            this._validatorLabel.remove();
        }
    }
    
}