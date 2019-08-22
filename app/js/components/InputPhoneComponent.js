class InputPhoneComponent extends InputComponent{
    constructor(id, name, type, parentId, className = null, placeholder = null, validatorMessage = null){
        super(id, name, type, parentId, className, placeholder, validatorMessage);
        
        // Usign third-party script VMasker to get input masked style
        VMasker(this._input).maskPattern("(99) 9999-9999");
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