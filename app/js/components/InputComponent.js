class InputComponent{
    
    constructor(id, name, type, parentId, className = null, placeholder = null, validatorMessage = null){
        this._input = document.createElement('input');
        this._input.setAttribute('id', id);
        this._input.setAttribute('name', name);
        this._input.setAttribute('type', type);
        if(placeholder) this._input.setAttribute('placeholder', placeholder);
        if(className) this._input.className += className;
        this._input.setAttribute('autocomplete', 'off');

        this._input.addEventListener('keyup', e => this._handleValidation(e));

        this._parentElement = document.querySelector(`#${parentId}`);

        this._validatorLabel = document.createElement('small');
        this._validatorLabel.innerHTML = validatorMessage ? validatorMessage : 'Campo inválido';        
    }
 
    _handleValidation(e){
        throw new Error('The _handleValidation method must be implemented');
    }

    append(){
        this._parentElement.appendChild(this._input);
    }

}