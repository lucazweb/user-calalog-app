class MessageView extends View{

    template(model){
        return ` <div class="message-component ${model.isError ? 'error-message' : ''}"> ${model.text} </div>`;
    }

    update(model){
        this._element.innerHTML = this.template(model);
        let self = this;

        setTimeout(function(){
            self._element.innerHTML  = '';
        }, 2500);
    }
}