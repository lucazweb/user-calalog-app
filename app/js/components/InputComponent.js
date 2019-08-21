class InputComponent{
    
    constructor(id, name, type, parentId, className = null, placeholder = null){
        this._input = document.createElement('input');
        this._input.setAttribute('id', id);
        this._input.setAttribute('name', name);
        this._input.setAttribute('type', type);
        if(placeholder) this._input.setAttribute('placeholder', placeholder);
        if(className) this._input.className += className;

        this._parentElement = document.querySelector(`#${parentId}`);
    }
 
    
    append(){
        this._parentElement.appendChild(this._input);
    }

}