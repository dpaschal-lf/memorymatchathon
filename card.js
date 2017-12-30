

class Card{
	constructor(frontImage){
		this.frontImage = frontImage;
		this.elements = {
			cardContainer: null,
			card: null,
			front: null,
			back: null
		} 
	}
	create(){
		this.elements.cardContainer = document.createElement('DIV');
		this.elements.cardContainer.classList.add('cardContainer');
		this.elements.card = document.createElement('DIV');
		this.elements.card.classList.add('card');
		this.elements.front = document.createElement('DIV');
		this.elements.front.style.backgroundImage= `url(${this.frontImage})`;
		this.elements.front.classList.add('front');
		this.elements.back = document.createElement('DIV');
		this.elements.back.classList.add('back');

		//back.addEventListener('click', handleClick);

		this.elements.cardContainer.appendChild(this.elements.card);
		this.elements.card.appendChild(this.elements.front);
		this.elements.card.appendChild(this.elements.back);	
		return this.elements.cardContainer;	
	}
	reveal(){
		this.elements.back.classList.add('hide');
	}
	revert(){
		this.elements.back.classList.remove('hide');
	}	
}

class MMCard extends Card{
	constructor(frontImage, clickCallback){
		super(frontImage);
		this.clickCallback = clickCallback;
	}
	create(){
		let card = super.create();
		this.elements.back.addEventListener('click', this.handleClick.bind(this));
		return card;
	}
	handleClick(){
		this.clickCallback(this);
	}
	getID(){
		return this.elements.front.style.backgroundImage
	}

}







