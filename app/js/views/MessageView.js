class MessageView extends View{

    template(model){
        return ` <div class="message-component"> ${model.text} </div>`;
    }

    update(model){
        this._element.innerHTML = this.template(model);
        let self = this;

        setTimeout(function(){
            self._element.innerHTML  = '';
        }, 2500);
    }
}