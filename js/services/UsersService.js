class UsersService{
    constructor(endpoint){
        this._endpoint = endpoint;
        this._response = {};
    }

    getUsers(error, success){
        fetch(this._endpoint)
            .then(response => response.json())
            .then(data => success(data))
            .catch(err => error(err))
    }

    get baseurl(){
        return this._baseUrl;
    }
}