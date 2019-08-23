class ButtonComponent{
	constructor(type, text, parentId, className = null,){
		this._button = document.createElement('button');
		this._button.setAttribute('type', type);
		if(className) this._button.className += className;
		
		// this._button.addEventListener('click', e => { 
		// 	this.clickAnimation(e);
		// });		 

		this._button.innerHTML = text;
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