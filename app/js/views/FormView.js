class FormView extends View {

    template(model){
        return `
            <div class="default-form">
                <h2> Cadastro </h2>
                <form onsubmit="controller.addUser(event)">
                    <div class="form-group">
                        <label for="name">Nome</label>
                        <input id="name" name="nome" autocomplete="off" type="text" placeholder="Nome completo (sem abreviações)" />
                        <small>O campo deve conter 3 caracteres ou mais</small>
                    </div>
                    <div class="form-group">
                        <label for="cpf">CPF</label>
                        <input id="cpf" class="invalid" name="cpf" autocomplete="off" type="text" placeholder="CPF" />
                        <small>Digite um CPF válido</small>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input id="phone" name="phone" autocomplete="off" type="text" placeholder="Telefone com DDD" />
                        <small>Digite um telefone válido</small>
                    </div>
                    <div class="form-group">
                        <label for="phone">E-mail</label>
                        <input id="email" name="email" autocomplete="off" type="email" placeholder="E-mail" />
                        <small>Digite um e-mail válido</small>
                    </div>
                    
                    <div class="form-group"> 
                        <button class="btn btn-default">Cadastrar</button>
                    </div>
                </form>
            </div>      
        `
    }

    update(model){
        this._element.innerHTML = this.template(model);
        // 1. create custom inputs,
        // 2. pass to template
    }
}