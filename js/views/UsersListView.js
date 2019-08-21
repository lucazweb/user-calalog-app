class UsersListView{
    constructor(element){
        this._element = element;
    }


    template(model){
 
        return  `
            <ul>
                ${
                    model.users.map(user => {
                        console.log(user);
                        return `
                                <li>
                                    <span>${user.name}</span>
                                    <span>${user.cpf}</span>
                                    <span>${user.phone}</span>
                                    <span>${user.email}</span>
                                </li>                            
                                `
                    }).join('')
                }
            </ul>        
        `;
    }

    update(model){
        this._element.innerHTML  = this.template(model);
    }

}