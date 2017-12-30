

class MemoryMatchGame{
	constructor(cardImages, gameElement){
		this.originalImages = cardImages;
		this.gameDomElement = gameElement;
		this.cardObjs = [];
		this.init();
	}
	init(){
		this.firstCardClicked = null;
		this.totalCards = null;
		this.matches = 0;
		this.cardsCanClick = true;
		this.createCards( this.randomizeArray(this.originalImages) );
	}
	randomizeArray(targetArray){
		const newArray = [];
		const array = targetArray.slice();
		while(array.length){
			let randomNum = (Math.random() * array.length) >> 0;
			newArray[newArray.length] = array.splice(randomNum,1)[0];
		}
		return newArray;
	}
	createCards(imageArray){
		const totalArray = [...imageArray,...imageArray];
		this.totalCards = totalArray.length;
		//let ce = document.createElement;  why won't this work?

		totalArray.forEach(image=>{
			let card = new MMCard(image, this.handleClick.bind(this));
			this.gameDomElement.appendChild( card.create() );
			this.cardObjs.push(card);
		})
	}
	handleClick(card){
		if(!this.cardsCanClick){
			return;
		}

		card.reveal();
		if(this.firstCardClicked===null){
			this.firstCardClicked = card;
			return;
		}
		let secondCardClicked = card;
		if(this.firstCardClicked.getID() === secondCardClicked.getID){
			this.matches++;
			if(this.matches === this.totalCards){
				this.win();
			}
		}
		else {
			this.cardsCanClick = false;
			setTimeout(this.revertCards.bind(this),3000, this.firstCardClicked, secondCardClicked);
			this.firstCardClicked = null;
		}
	}
	revertCards(card1, card2){
		card1.revert();
		card2.revert();
		this.cardsCanClick = true;
	}
	win(){
		alert('you win!');
		while (this.gameDomElement.firstChild) {
		  this.gameDomElement.removeChild(game.firstChild);
		}
		this.cardsCanClick= true;
		this.matches = 0;
		this.init();
	}
}