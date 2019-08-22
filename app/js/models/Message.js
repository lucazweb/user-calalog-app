class Message {
    constructor(message = null){
        this._text = message;
    }

    get text(){
        return this._text;
    }

    set text(text){
        this._text = text;
    }
}