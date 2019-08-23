class UsersListView{
    constructor(element){
        this._element = element;
    }

    template(model){ 
        return  `
            <div id="usersList" class="list-component">
                <h2 class="title-default"> Lista de usuários </h2>
                <ul>
                    ${
                        model.users.map((user, index) => {
                            return `
                                    <li>
                                        <span>${user.name}</span>
                                        <span>${user.cpf}</span>
                                        <span>${user.phone}</span>
                                        <span>${user.email}</span>
                                        <button id="user${index}" class="delete-user"> x </button>
                                    </li>                            
                                    `
                        }).join('')
                    }

                    ${ model.users.length === 0 ? `<h3> Sem usuários cadastrados</h3>` : `` }

                </ul>  
            </div>      
        `;
    }

    update(model){
        this._element.innerHTML  = this.template(model);
    }

}