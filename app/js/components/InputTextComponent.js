class InputTextComponent extends InputComponent{
    constructor(id, name, type, parentId, className = null, placeholder = null, validatorMessage = null){
        super(id, name, type, parentId, className, placeholder, validatorMessage);
    }


    _handleValidation(e){
        console.log(e.target.value);
    }
    
}