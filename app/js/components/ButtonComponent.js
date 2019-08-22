class ButtonComponent{
	constructor(parentId){
		this._button = document.createElement('button');
		this._button.setAttribute('type', 'submit');
		this._button.addEventListener('click', e => this.clickAnimation(e));
		 
		this._button.innerHTML = 'Salvar usuário';
		this._parentElement = document.querySelector(`#${parentId}`);
		
	}


	clickAnimation(e){
		e.preventDefault();
		console.log('..clickAnimation()');
		this._button.innerHTML = 'Loading..';
		let self = this;
		setTimeout(function(){
			self._button.innerHTML = 'Salvar usuário';
		}, 3000);
	}

	append(){
		this._parentElement.appendChild(this._button);
	}

}