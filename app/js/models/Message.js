class Message {
    constructor(message = null, isError = false){
        this._text = message;
        this._isError = isError;
    }

    get text(){
        return this._text;
    }

    set text(text){
        this._text = text;
    }

    set isError(flag){
        this._isError = flag;
    }

    get isError(){
        return this._isError;
    }
}